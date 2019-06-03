import React from 'react';
import { FlatList, AsyncStorage , ActivityIndicator, TouchableOpacity ,Text, View ,Image , ImageBackground , StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderComponent from '../components/header';
import Loading from '../components/loader';

export default class Projects extends React.Component {
    
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  
  renderItem = ({ item }) =>{

   

    return(
      <View>



          
            <ImageBackground style={ styles.image }
             
             source={{uri: 'http:' + item.project_image }}
                   
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
                            onPress={(item) => this.props.navigation.navigate ('Details',{ _id: item.id })}
                        >
                            <Text style={styles.openText}> OPEN </Text>
                        </TouchableOpacity>
                    </View>
                  </View>
            </ImageBackground>
         
    </View>
    )
    
  }

  async componentDidMount(){

    

    AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
      let id_token = data[0][1];
      let XAPIKEY = data[1][1];
      console.log(id_token)
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

getData = async () => {
  AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
    let id_token = data[0][1];
    let XAPIKEY = data[1][1];

    console.log(id_token)
    console.log(XAPIKEY)
    console.log(data)
    console.log(JSON.stringify(data))
    return data;
       
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
    height: 350 , 
    backgroundColor:'#000', 
    opacity: 0.8,
    borderWidth:1,
    borderColor:'#ffffff70',
  },
   overlay: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.8)'
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
