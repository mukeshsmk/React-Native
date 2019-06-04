import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/header';

export default class Changepassword extends Component {
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
                     />
                    </View>
                    <View style={styles.inputStyle}>
                     <TextInput  
                     secureTextEntry={true}
                     placeholder="New Password" 
                     style={styles.textInput} 
                     />
                    </View> 
                    <View style={styles.inputStyle}>
                     <TextInput  
                     secureTextEntry={true}
                     placeholder="Confirm New Password" 
                     style={styles.textInput} 
                     />

                    </View>
                </View>
                <View style={styles.conditionView}>
                    <Text>
                        For security passwords must with at least 8 characters and include a least one number or special character
                    </Text>
                </View>
                <View style={styles.submitView}>

                    <TouchableOpacity style={styles.submit}>
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
