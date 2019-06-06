import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Slider from '@react-native-community/slider'
import HeaderComponent from '../components/header';

export default class Surveyscale extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //Initial Value of slider
          sliderValue: 7
        };
      }
    
      render() {
        return (
            <View style={ styles.container }>
                  <HeaderComponent
                    title={"Servey"}
                    navigation={this.props.navigation}
                />   
            
          <View style={{ backgroundColor: this.state.ColorHolder }} >
          <View style={styles.scaleView}>
          <Text style={styles.newscale}>New Scacle 2.27 11:17 EST </Text>
          <Text>please move the slider to select an answer</Text>
          </View>
            
            <Text style={styles.headerText}>Value of slider is : {this.state.sliderValue}</Text>
    
            <Slider
              maximumValue={10}
              minimumValue={0}
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              step={1}
              value={this.state.sliderValue}
              onValueChange={(sliderValue) => this.setState({ sliderValue })}
              style={{ width: 300, height: 40 , marginRight: '10%',  marginLeft: '10%', }}
            />
    
          </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create(
      {
        container: {
            flex: 1,
            margin:0,
        },
        headerText: {
          fontSize: 25,
          textAlign: "center",
          margin: 10,
          color: 'black',
          fontWeight: "bold"
        },
        newscale:{
            fontSize:18,
            color:'#000',
        },
        scaleView:{
            marginRight: '10%',  
            marginLeft: '10%',  
        }
    
      });