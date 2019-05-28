import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet ,TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class Projects extends Component {

    _retrieveData= async () => {
        var DEMO_TOKEN = await AsyncStorage.getItem(id_token);
        fetch("http://api-dev.ethosapp.com/v3/projects", {
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + DEMO_TOKEN,
            'X-API-KEY': 'k41403aqpiqpn66w7oo50jgivzw2irq0vqmsxmvm',
          }
        })
        .then((response) => response.text())
        .then((projects) => { 
          Alert.alert(
            "Details:", projects)
        })
        .done();
      }


      componentDidMount(){
        return fetch('http://api-dev.ethosapp.com/v3/projects')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({pokeList: pokemon.results, loading: false});
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    render() {
        return (
            <View style={styles.containerView}>

                <ImageBackground
                    source={{ uri: 'http://bit.ly/2GfzooV' }}
                    style={styles.image}
                >
                    <Text
                        style={styles.imageText}
                    >
                        probs notification test
                    </Text>
                    
                    <View style={styles.openView}>
                        <TouchableOpacity 
                            style={styles.open}
                            onPress={() => this.props.navigation.navigate('Details')}
                        >
                            <Text style={styles.openText}> OPEN </Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

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
        height: '50%',
        width: '100%',
        position: 'relative', // because it's parent
        top: 2,
        left: 2
    },
    imageText: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '25%',
        fontSize: 20
    },
    openView:{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '35%',
    },
    openText:{
        fontWeight: 'bold',
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
