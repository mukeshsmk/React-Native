import React, { Component } from 'react';
import { FlatList, AsyncStorage, ActivityIndicator, TouchableOpacity, Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import HeaderComponent from '../components/header';
import Loading from '../components/loader';
import {WebView} from 'react-native';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            id: null,
            dataSource: null
        }
    }

    async componentDidMount() {
        AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {

            const { navigation } = this.props;
            const id = navigation.getParam('_id');

            this.setState({
                id: id
            })
            let id_token = data[0][1];
            let XAPIKEY = data[1][1];

            fetch("http://api-dev.ethosapp.com/v3/projects/" + id, {
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
                    }, function () {

                    });

                })
                .catch((error) => {
                    console.error(error);
                });
        });


    }

    componentDidUpdate(prevProps, prevState) {

        const { navigation } = this.props;
        const id = navigation.getParam('_id');
        console.log(id, prevState.id);

        if (id !== prevState.id) {
            this.setState({
                dataSource: null,
                id: id
            })
            this.componentDidMount();
        }
    }

    render() {

        if (this.state.isLoading || this.state.dataSource == null) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            const data = this.state.dataSource;
            console.log("data",data)

            var  image = data.project_image;
            if (image ==  null ){
                image = "//11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/mobile-app-testing.jpg";
            }
            else{
                image;
            }
            
            return (

                <View style={{ flex: 1 }}>
                    <ImageBackground  style={styles.image}
                        source={{uri: 'http:' + image }}
                       
                    >
                        <View style={styles.overlay}>

                            <Text style={styles.imageText}>
                                {data.name}
                            </Text>

                            <Text style={styles.projectOwner}>
                                Project Owner:
                            </Text>

                            <Text style={styles.ownerName} >
                                { data.manager.first_name }  { data.manager.last_name }
                            </Text>
                           
                        </View>

                    </ImageBackground>

                    <View  style={{ flex: 1 }}>
                    {/* <WebView html={ data.description } /> */}
                    </View>

                    {/* <View  style={{ flex: 1 }}>
                        <WebView                      
                            source={{html: data.description }}
                        />
                    </View> */}

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
    image: {
        flex:1,
        width: '100%', 
        height: '70%' , 
        borderWidth:1,
        borderColor:'#ffffff70',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    imageText: {
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '15%',
        fontSize: 36
    },
    projectOwner: {
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '45%',
        color: 'white',
        fontSize: 22,
    },
    ownerName: {
        position: 'absolute',
        bottom: 0,
        left: '5%',
        top: '55%',
        color: 'white',
        fontSize: 16,
    },
    description:{
        color: '#000', 
    }
});
