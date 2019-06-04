import React, { Component } from 'react';
import { Text, View , StyleSheet, Button } from 'react-native';
import HeaderComponent from '../components/header';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Servey extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}   
  }

  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
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
    
      <RadioGroup
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} style={styles.radioButton}>
          <Text style={styles.radioButtonText}>This is item #1</Text>
        </RadioButton>
 
        <RadioButton value={'item2'} style={styles.radioButton}>
          <Text style={styles.radioButtonText} >This is item #2</Text>
        </RadioButton>
 
        <RadioButton value={'item3'} style={styles.radioButton}>
          <Text style={styles.radioButtonText}>This is item #3</Text>
        </RadioButton>
      </RadioGroup>
      
      <Text style={styles.text}>{this.state.text}</Text>
      
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
  surveyView:{
    marginRight:'5%',
    marginLeft:'5%',
  },
  radioButtonText:{
    fontSize:16,
    color:'#000'
  },
  radioButton:{
    borderBottomColor: '#2289dc',
    borderBottomWidth: 2,
   
  }
})
