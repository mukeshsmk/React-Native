import React, { Component } from 'react';
import { Text, Alert,View , ActivityIndicator, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/header';
import Loading from '../components/loader';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

const options = {
    title: 'Choose Photo',
    takePhotoButtonTitle:'Camera',
    chooseFromLibraryButtonTitle:'Photo Library'
  };
    
export default class Profile extends Component {

    constructor(props){
        super(props);
        this.state ={ 
            isLoading: true,
            photo: null
        }   
      }
      

      async componentDidMount(){
        AsyncStorage.multiGet(['id_token', 'user_id','X-API-KEY']).then((data) => {
          let id_token = data[0][1];
          let user_id = data[1][1];
          let XAPIKEY = data[2][1];
          console.log(id_token)
          console.log(user_id);
          console.log(XAPIKEY)
          fetch("http://api-dev.ethosapp.com/v3/users/" + user_id , {
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
    
    changeImage =() =>{
     
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
               }else {
                console.log('User selected a file form camera or gallery', response); 
               }
            const data = new FormData();
            data.append('name', 'photo');
            data.append('fileData', {
            uri : response.uri,
            type: response.type,
            name: response.fileName,
            photo:response.uri,
            });
            const config = {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            },
            body: data,
            };
            AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
                let id_token = data[0][1];
                let XAPIKEY = data[1][1];
                console.log(id_token)
                console.log(XAPIKEY)
            fetch('http://api-dev.ethosapp.com/v3/users', {
              method: 'put',
              headers: {
                  'authorization': 'bearer ' + id_token,
                  'X-API-KEY': XAPIKEY,
                  'Content-Type': 'application/json',
              },
            }).then((response) => response.json())
            .then((res) => {
              console.log(res)
              if (typeof (res.status == "true")) {
                  Alert.alert("Profile picture changed successfully");
                }
                else {
            
                Alert.alert("Error");
                 
                //  this.props.navigation.navigate('Home');
                }
            }).catch((error) => {
              console.error(error);
          });
  })

})
}

//   uploadImage= async () => {

//     const path = this.state.source;
//     const formData = new FormData()
//     formData.append('file', {
//       uri: path,
//       name: 'photo.jpg',
//       type: 'image/jpg'
//     })

//     AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
//         let id_token = data[0][1];
//         let XAPIKEY = data[1][1];
//         console.log(id_token)
//         console.log(XAPIKEY)
//     fetch('http://api-dev.ethosapp.com/v3/users', {
//       method: 'put',
//       headers: {
//           'authorization': 'bearer ' + id_token,
//           'X-API-KEY': XAPIKEY,
//           'Content-Type': 'application/json',
//       },
//       body: data,
//     }).then((response) => response.json())
//       .then((res) => {
//         console.log(res)
//         if (typeof (res.status == "true")) {
//             Alert.alert("Profile picture changed successfully");
//           }
//           else {
      
//           Alert.alert("Error");
           
//           //  this.props.navigation.navigate('Home');
//           }
//       }).catch((error) => {
//         console.error(error);
//     });
// });

//   }

    render() {

        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
                <Loading />
              </View>
            )
          }
       else {
            const data = this.state.dataSource;
            console.log("data",data)
        return (
            <View style={styles.containerView}>
                <HeaderComponent
                    title={"Profile"}
                    navigation={this.props.navigation}
                />

                <View style = { styles.user }>
                    <Text  style = { styles.userName }> Hi { data.first_name } { data.last_name } </Text>
                </View>

                <View style={styles.profile}>
                    <View style={styles.profileView}>
                        <Image style={styles.profileImage} source={require("../images/profile.png")} />
                    </View>
                </View>

                <View style={styles.buttonView}>

                    <TouchableOpacity style={styles.change}
                    onPress = { this.changeImage}>
                        <Text style={styles.changeText}>
                            Change Profile Photo 
                        </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.change}
                    onPress = { this.uploadImage}>
                        <Text style={styles.changeText}>
                            Upload Profile Photo 
                        </Text>
                    </TouchableOpacity> */}


                    <TouchableOpacity style={styles.change}>
                        <Text style={styles.changeText}>
                            Change Password 
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
       }
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        margin: 0

    },
    user:{
        alignItems: 'center',
        justifyContent: 'center', 
    },
    userName:{
        fontSize:20,
        color:'#000',
        marginTop: 25,
    },
    profileView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: '50%',
        height: 200,
        marginTop: 25,
        marginBottom:25,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#2289dc',
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    change: {
        width: "85%",
        margin: 0,
        marginTop:10,
        marginBottom:10,
        backgroundColor: '#2ba1d0',
        padding: 15,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    changeText: {
        color: '#fff',
    },
})
