import React, { Component } from 'react';
import { ScrollView, FlatList, AsyncStorage, ActivityIndicator, TouchableOpacity, Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import HeaderComponent from '../components/header';
import Loading from '../components/loader';

export default class Workspaceentries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            id: null,
            dataSource: null
        }
    }

    componentDidMount() {

        AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {

            const { navigation } = this.props;
            const id = navigation.getParam('_id');
            this.setState({
                id: id
            })
            let id_token = data[0][1];
            let XAPIKEY = data[1][1];

            fetch("http://api-dev.ethosapp.com/v3/workspaces/" + id, {
                method: "GET",
                headers: {
                    'Authorization': 'bearer ' + id_token,
                    'X-API-KEY': XAPIKEY,
                    '_action': 'entries'
                }
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.data = responseJson;
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

    renderItem = ({ item }) => {

        const data = this.state.dataSource;
        console.log("data", data)

        var image = item.media_url;
        if (item.file_type == 'image') {
            image;
        }
        else {
            image = "//11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/mobile-app-testing.jpg";
        }

        return (

            <ScrollView>
                <View style={styles.cardborder}>

                    <View style={styles.cardView}>
                        <Text style={styles.time}>{item.orignal_created_at}</Text>
                        <Image source={{ uri: 'http:' + image }} style={styles.image} />
                        <View style={styles.overlay}>
                            <View style={styles.openView}>
                                <TouchableOpacity
                                    style={styles.open}
                                    onPress={() => this.props.navigation.navigate('Groupchat')}>

                                    <Text style={styles.openText}> View Entry </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* <View style={styles.container}>
                        <Video source={{ uri: 'http://d30qdikvwvm498.cloudfront.net/255525/ec86b74f-bbb8-462c-92b1-3fe3c728f6dd.mp4' }} 
                            ref={(ref) => {
                                this.player = ref
                            }}                                      // Store reference
                            onBuffer={this.onBuffer}                // Callback when remote video is buffering
                            onEnd={this.onEnd}                      // Callback when playback finishes
                            onError={this.videoError}               // Callback when video cannot be loaded
                            style={styles.backgroundVideo} />
                    </View> */}
                 
                    
                </View>

            </ScrollView>
        )
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

            return (

                <View style={{ flex: 1 }}>
                    <HeaderComponent
                        title={"Workspace Entries"}
                        navigation={this.props.navigation}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}

                        keyExtractor={({ id }, index) => id}
                    />
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
    cardborder: {
        borderBottomWidth: 1,
        borderBottomColor: "#c1c1c2"
    },
    cardView: {
        margin: 15,
        borderTopWidth: 1,
        borderTopColor: '#dcdcdddb',
        borderRightWidth: 1,
        borderRightColor: '#dcdcdddb',
        borderLeftWidth: 2,
        borderLeftColor: '#2595fe',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    time: {
        margin: 8,
        textAlign: 'right', alignSelf: 'stretch'
    },
    image: {
        width: '100%',
        height: 220
    },
    overlay: {
        flex: 1,
    },
    openView: {
        position: 'absolute',
        bottom: 0,
        left: '60%',
        marginBottom: '3%'
    },
    openText: {
        color: 'white',
        fontSize: 16,
        borderRadius: 1,
        backgroundColor: '#2595fe',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 8,
        paddingBottom: 8,

    },
    backgroundVideo: {
        position: 'absolute',
        top: 50,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
