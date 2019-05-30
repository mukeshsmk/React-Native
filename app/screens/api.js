import React from 'react';
import { FlatList, AsyncStorage , ActivityIndicator, TouchableOpacity ,Text, View ,Image , ImageBackground , StyleSheet} from 'react-native';

export default class Api extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

;

  renderItem = ({ item }) =>{
    return(
      <View>
            <ImageBackground
             style={{width: '100%', height: 300 }}
             source={{uri: 'http:' + item.project_image }}
                   
                >
                  <View style={styles.overlay} />
                    <Text
                    style={styles.imageText}
                    >
                      { item.name }
                    </Text>

                    <View style={styles.openView}>
                        <TouchableOpacity 
                            style={styles.open}
                            onPress={() => this.props.navigation.navigate('Projects')}
                        >
                            <Text style={styles.openText}> OPEN </Text>
                        </TouchableOpacity>
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
        </View>
      )
    }
    
    return(
      <View style={{flex: 1, paddingTop:20}}>
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
      flex: 1,
      height: '35%',
      width: '100%',
      position: 'relative', // because it's parent
      opacity: 0.7,
      // backgroundColor:'#000',
      top: 2,
      left: 2
  },
//    overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(69,85,117,0.7)',
//   },
  imageText: {
      color: 'white',
      position: 'absolute',
      bottom: 0,
      left: '5%',
      top: '55%',
      fontSize: 22
  },
  openView:{
    position: 'absolute',
    bottom: 0,
    left: '5%',
    top: '80%',
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
