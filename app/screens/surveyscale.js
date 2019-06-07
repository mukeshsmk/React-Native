import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Button, TouchableOpacity, TextInput, Platform } from 'react-native';
import Slider from '@react-native-community/slider'
import HeaderComponent from '../components/header';

export default class Surveyscale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial Value of slider
      sliderValue: 7,
      showMe: true,
    };
  }


  _onPress() {
    this.setState({
      showMe: false,
    })
  }

  render() {
    return (

      <View style={{ flex: 1 }}>

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
            onValueChange={(sliderValue) => this.setState({ sliderValue, showMe: false, })}
            style={{ width: '80%', height: 40, marginRight: '5%', marginLeft: '5%', }}
          />


          <View>

            {
              this.state.showMe ?
                null

                : <View style={styles.textAreaContainer} >
                  <Text style={styles.rating}>Why did you give that rating?</Text>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>
            }

          </View>

        </View>

        <View style={styles.sendView} >
          <TouchableOpacity>
            <Text style={styles.sendText}>
              SEND
          </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}




const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      margin: 0,
    },
    headerText: {
      fontSize: 18,
      margin: 10,
      marginLeft: '8%',
      color: 'black',
    },
    newscale: {
      fontSize: 18,
      color: '#000',
      marginBottom: 10,
      marginTop: 10,
    },
    scaleView: {
      marginRight: '8%',
      marginLeft: '8%',
    },
    rating: {
      marginLeft: '8%',
    },
    textArea: {
      height: 120,
      borderColor: 'grey',
      borderWidth: 1,
      padding: 5,
      margin: 20,
    },
    sendView: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '5%',
      marginLeft: '32%',
    },
    sendText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: '#2ba1d0',
      color: '#fff',
      borderRadius: 25,
    },
  });