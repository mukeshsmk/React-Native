import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class Api extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  // componentDidMount(){
  //   this.getData();
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.movies,
  //       }, function(){

  //       });
        
  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }



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
        //Your logic
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
          renderItem={({item}) => <Text> {item.name}</Text>}
    
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
   
  }
}