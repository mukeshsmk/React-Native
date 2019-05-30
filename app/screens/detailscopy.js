import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet ,TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class Details extends Component {
    render() {
        return (
            <View style={styles.containerView}>

                <ImageBackground
                    source={{ uri: 'http://bit.ly/2GfzooV' }}
                    style={styles.image}
                >
                <View style={styles.overlay} />
                    <Text
                    style={styles.imageText}
                    >
                       probs notification test
                    </Text>
                    <Text
                    style={styles.projectOwner}
                    >
                        Project Owner:
                    </Text>
                    <Text
                        style={styles.ownerName}
                    >
                        Jagan
                    </Text>
                    
                  

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
        height: '35%',
        width: '100%',
        position: 'relative', // because it's parent
        opacity: 0.7,
        // backgroundColor:'#000',
        top: 2,
        left: 2
    },
//    overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(69,85,117,0.7)',
//   },
    imageText: {
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '5%',
        fontSize: 36
    },
    projectOwner:{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '20%',
        color: 'white',
        fontSize: 22,
    },
    ownerName:{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '25%',
        color: 'white',
        fontSize: 16,
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
