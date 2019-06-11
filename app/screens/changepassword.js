import React, { Component } from 'react';
import { Text,Alert, TextInput, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/header';
import AsyncStorage from '@react-native-community/async-storage';

export default class Changepassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
          value: {
            current_password: '',
            new_password: '',
            confirm_password: '',
          }
        }
      }
    
      validateForm() {
        return (
          this.state.current_password &&
          this.state.new_password &&
          this.state.new_password === this.state.confirm_password
        );
      }

      
      _submit = async () => {

        AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
            let id_token = data[0][1];
            let XAPIKEY = data[1][1];
            console.log(id_token)
            console.log(XAPIKEY)
        fetch('http://api-dev.ethosapp.com/v3/users', {
          method: 'post',
          headers: {
              'Authorization': 'bearer ' + id_token,
              'X-API-KEY': XAPIKEY,
              '_action': 'change-password',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            current_password: this.state.current_password, 
            new_password: this.state.new_password, 
            confirm_password: this.state.confirm_password, 
          })
        }).then((response) => response.json())
          .then((res) => {
            console.log(res)
            if (typeof (res.status == "true")) {
              Alert.alert("Password changed successfully");
            }
            else {
        
            Alert.alert("Invalid current password supplied");
             
            //  this.props.navigation.navigate('Home');
            }
          }).catch((error) => {
            console.error(error);
        });
    });
      
  
  }
    render() {
        return (
            <View style={styles.containerView}>
                <HeaderComponent
                    title={"Change Password"}
                    navigation={this.props.navigation} 
                />
                < View style={styles.inputView }>
                    <View style={styles.inputStyle}>
                    <TextInput  
                     secureTextEntry={true}
                     placeholder="Current Password" 
                     style={styles.textInput} 
                     onChangeText={(current_password) => this.setState({ current_password })}
                     />
                    </View>
                    <View style={styles.inputStyle}>
                     <TextInput  
                     secureTextEntry={true}
                     placeholder="New Password" 
                     style={styles.textInput} 
                     onChangeText={(new_password) => this.setState({ new_password })}
                     />
                    </View> 
                    <View style={styles.inputStyle}>
                     <TextInput  
                     secureTextEntry={true}
                     placeholder="Confirm New Password" 
                     style={styles.textInput} 
                     onChangeText={(confirm_password) => this.setState({ confirm_password })}
                     />

                    </View>
                </View>
                <View style={styles.conditionView}>
                    <Text>
                        For security passwords must with at least 8 characters and include a least one number or special character
                    </Text>
                </View>
                <View style={styles.submitView}>

                    <TouchableOpacity style={styles.submit}
                     onPress={this._submit}
                     disabled={!this.validateForm()}>
                        <Text style={styles.submitText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        margin: 0

    },
    inputView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'10%',
    },
    textInput:{
       marginLeft:10,
    },
    inputStyle:{
        borderColor:'#b1b4b6',
        width: "85%",
        borderWidth: 2,
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 30,
        marginBottom:10,
        marginTop:10,
    },
    conditionView:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'7%',
        marginRight:'8%',
        marginTop:15,
        marginBottom:15,
    },
    submitView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    submit: {
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
    submitText: {
        color: '#fff',
    },
})
