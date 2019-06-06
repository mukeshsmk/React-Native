import React from 'react';
import { FlatList, AsyncStorage , ActivityIndicator, TouchableOpacity ,Text, View ,Image , ImageBackground , StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderComponent from '../components/header';
import Loading from '../components/loader';
import { NavigationActions } from 'react-navigation';

export default class Projects extends React.Component {
    
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    
  }
  open = async (id) => { 
    try {
      await AsyncStorage.setItem('Project_id', id);

    } catch (error) {
      console.log("error",error)
    }

    const { navigate } = this.props.navigation;
    navigate('DetailsTab',{'_id': id})
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
             
             source={{uri: 'http:' + image }}
                   
                >
                  <View style={styles.overlay}>
                    <Text
                    style={styles.imageText}
                    >
                      { item.name }
                    </Text>

                    <View style={styles.openView}>
                        <TouchableOpacity 
                            style={styles.open}
                            onPress={() => this.open(item.id) }>
                        
                            <Text style={styles.openText}> OPEN </Text>
                        </TouchableOpacity>
                    </View>
                  </View>
            </ImageBackground>
         
    </View>
    )
    
  }

  async componentDidMount(){

    

    AsyncStorage.multiGet(['id_token', 'user_id','X-API-KEY']).then((data) => {
      let id_token = data[0][1];
      let user_id = data[1][1];
      let XAPIKEY = data[2][1];
      console.log(id_token)
      console.log(user_id);
      console.log(XAPIKEY)
      fetch("http://api-dev.ethosapp.com/v3/projects", {
        method: "GET",
        headers: {
          'Authorization': 'bearer ' + id_token,
          'X-API-KEY': XAPIKEY,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        console.log("value",responseJson)
      })
      .catch((error) =>{
        console.error(error);
      });
  });
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
            title={"Projects"}
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
    height: 300 , 
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
      fontSize: 22,
      marginBottom:'20%'
  },
  openView:{
    position: 'absolute',
    bottom: 0,
    left: '5%',
    marginBottom:'5%'
},
openText:{
    color: 'white',
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#fff',
    paddingRight:20,
    paddingLeft:20,
    paddingTop:8,
    paddingBottom:8,

}
});
