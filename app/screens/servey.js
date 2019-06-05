import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableOpacity , Button ,TextInput } from 'react-native';
import HeaderComponent from '../components/header';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Servey extends Component {

  constructor(props){
    super(props);
    this.state={
      showMe:true,
      isLoading: true
     }
   }
  
   _onPress()
   {
    this.setState({
      showMe:!this.state.showMe
    })
  }

  render() {
    return (
      <View style={styles.containerView}>
      <HeaderComponent
         title={"Servey"}
         navigation={this.props.navigation}
       />   
        
        <View style={styles.surveyView}>
          <Text style={styles.survey}>test survey 1</Text>
          <Text>please select one answer</Text>
    
          <RadioGroup onPress= {()=> this._onPress()}>
          
            <RadioButton style={styles.radioButton} onChange = {()=> this._onPress()}>
              <Text style={styles.radioButtonText} >This is item #1</Text>
            </RadioButton>
    
            <RadioButton style={styles.radioButton} onPress = {()=> this._onPress()}>
              <Text style={styles.radioButtonText} >This is item #2</Text>
            </RadioButton>
    
            <RadioButton style={styles.radioButton} onPress = {()=> this._onPress()}>
              <Text style={styles.radioButtonText}>This is item #3</Text>
            </RadioButton>
          </RadioGroup>
      
         <View>
       
          <Text onPress = {()=> this._onPress()}>Click Me</Text>
          {
              this.state.showMe?
          <Text>Show Me</Text>
          
          :<View style={styles.textAreaContainer} >
              <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
            </View>
          }
         

         <View style={styles.sendView}>
            <TouchableOpacity style={styles.send}>
                <Text style={styles.sendText}>
                    SEND
                </Text>
            </TouchableOpacity>
         </View>
       
      </View>
    
    </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
      flex: 1,
      margin:0,

  },
  survey:{
    fontSize:18,
    color:'#000',
  },
  surveyView:{
    marginLeft:'5%',
    marginTop:5,
  },
  radioButtonText:{
    fontSize:16,
    color:'#000',
  },
  radioButton:{
    borderBottomColor: '#2289dc',
    borderBottomWidth: 2,
   
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
  
  },
  textArea: {
    height: 120,
  },
  sendView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  send: {
      width: "30%",
      margin: 0,
      marginTop:10,
      marginBottom:10,
      backgroundColor: '#2ba1d0',
      padding: 12,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
  },
  sendText: {
      color: '#fff',
  },
})
