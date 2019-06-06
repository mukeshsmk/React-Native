import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableOpacity , ImageBackground, Button } from 'react-native';
import HeaderComponent from '../components/header';

export default class Workspaces extends Component {
  render() {
    return (
      <View style={styles.containerView}>
         <HeaderComponent
            title={"Workspaces"}
            navigation={this.props.navigation}
          />   
        <View style={{ flex: 1 }}>
                
                     <ImageBackground  style={styles.image}
                        source={{uri: 'http://11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/mobile-app-testing.jpg'}}
                       
                    >
                        <View style={styles.overlay}>

                            <Text style={styles.imageText}>
                              TestWorkSpace
                            </Text>
                            <View style={styles.openView}>
                              <TouchableOpacity 
                                  style={styles.open}
                              >
                              
                                  <Text style={styles.openText}> View Entries </Text>
                              </TouchableOpacity>
                            </View>

                            <View style={styles.chatView}>
                              <TouchableOpacity 
                                  style={styles.open}
                              >
                              
                                  <Text style={styles.chatText}> Group Chat </Text>
                              </TouchableOpacity>
                            </View>
                           
                        </View>

                    </ImageBackground>    

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
image: {
    flex:1,
    width: '100%', 
    height: '30%' , 
    borderWidth:1,
    borderColor:'#ffffff70',
},
overlay: {
    width: '100%', 
    height: '30%' , 
    backgroundColor: 'rgba(0,0,0,0.5)'
},
imageText: {
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: '5%',
    top: '20%',
    fontSize: 32
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
  borderWidth: 3,
  borderColor: '#fff',
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
  borderWidth: 3,
  borderColor: '#fff',
  paddingRight:10,
  paddingLeft:10,
  paddingTop:15,
},
})