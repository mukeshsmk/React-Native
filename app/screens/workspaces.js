import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
import HeaderComponent from '../components/header';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/loader';



export default class Workspaces extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  
  async componentDidMount() {

    AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
      let id_token = data[0][1];
      let XAPIKEY = data[1][1];
      console.log(id_token)
      console.log(XAPIKEY)
      fetch("http://api-dev.ethosapp.com/v3/workspaces", {
        method: "GET",
        headers: {
          'Authorization': 'bearer ' + id_token,
          'X-API-KEY': XAPIKEY,
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("Workspace", responseJson)
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function () {

          });

        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  viewEntry = async (id) => { 
    const { navigate } = this.props.navigation;
    navigate('Workspaceentries',{'_id': id})
    try {
      await AsyncStorage.setItem('Entry_id', id);
      console.log('Entry_id', id);
    } catch (error) {
      console.log("error",error)
    }
  }

  renderItem = ({ item }) =>{

    var  image = item.project_image;
     if (image ==  "//d30qdikvwvm498.cloudfront.net" ){
         image = "//11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/mobile-app-testing.jpg";
     }
     else{
       image;
     }
       return(
         <View>          
               <ImageBackground style={ styles.image }
                
                source={require("../images/test.jpg")} >
                      
                     <View style={styles.overlay}>
                       <Text
                       style={styles.imageText}
                       >
                         { item.name }
                       </Text>
   
                       <View style={styles.openView}>
                          <TouchableOpacity 
                            style={styles.open}
                            onPress={() => this.viewEntry(item.id) }
                          >
                              
                          <Text style={styles.openText}> View Entries </Text>
                          </TouchableOpacity>
                      </View>

                      <View style={styles.chatView}>
                          <TouchableOpacity 
                            style={styles.open}
                            onPress = { ()=> this.props.navigation.navigate('Groupchat') }
                            >
                              
                          <Text style={styles.chatText}> Group Chat </Text>
                          </TouchableOpacity>
                      </View>

                     </View>
               </ImageBackground>
            
       </View>
       )
       
     }
   

     render(){
      

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
            <Loading />
          </View>
        )
      }
      
      return(
        <View style={{flex: 1 }}>
    
               <HeaderComponent
              title={"Workspaces"}
              navigation={this.props.navigation}
            />
          <FlatList
            data={this.state.dataSource}
            renderItem={ this.renderItem }
      
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
     
    }
  }
  


const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    margin: 0

  },
  image: {
    flex:1,
    width: '100%', 
    height: 200 , 
    backgroundColor:'#000', 
    opacity: 0.8,
    borderWidth:1,
    borderColor:'#ffffff70',
  },
   overlay: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  imageText: {
      color: 'white',
      position: 'absolute',
      bottom: 0,
      left: '5%',
      fontSize: 24,
      marginBottom:'20%'
  },
  openView:{
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: '5%',
    marginBottom:'5%'
  },
  openText:{
    color: '#000',
    fontSize: 16,
    borderRadius: 5,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:15,
  },
  chatView:{
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: '40%',
    marginBottom:'5%'
  },
  chatText:{
    color: '#000',
    fontSize: 16,
    borderRadius: 5,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:15,
  },
})