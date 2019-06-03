import React, { Component } from 'react';
import { FlatList, AsyncStorage , ActivityIndicator, TouchableOpacity ,Text, View ,Image , ImageBackground , StyleSheet} from 'react-native';
import HeaderComponent from '../components/header';
import Loading from '../components/loader';
 
export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    
        }
        
    async componentDidMount(){

       

        AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
          
         
          let id_token = data[0][1];
          let XAPIKEY = data[1][1];
          console.log(id_token)
          console.log(XAPIKEY)
          fetch("http://api-dev.ethosapp.com/v3/projects" ,  {
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
            }, function(){
    
            });
            console.log("value",responseJson)
          })
          .catch((error) =>{
            console.error(error);
          });
      });
        
    
    }
    
    getData = async () => {
      AsyncStorage.multiGet(['id_token', 'X-API-KEY']).then((data) => {
        let id_token = data[0][1];
        let XAPIKEY = data[1][1];
    
        console.log(id_token)
        console.log(XAPIKEY)
        console.log(data)
        console.log(JSON.stringify(data))
        return data;
           
    });
    }

    renderItem = ({ item }) => {
       
       


        return (
            <View>
                <ImageBackground style={styles.image}
                        source={{ uri: 'http://bit.ly/2GfzooV' }}
                   
                >
                    <View style={styles.overlay}>
                    <Text>Details Screen</Text>
                    <Text>itemId: {JSON.stringify(itemId)}</Text>
                    <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                    <Text
                        style={styles.ownerName}
                    >
                        Jagan
                    </Text>

                </View>

                </ImageBackground>

            </View>
        )

    }

//     render() {

//         if (this.state.isLoading) {
//             return (
//                 <View style={{ flex: 1, padding: 20 }}>
//                     <ActivityIndicator />
//                 </View>
//             )
//         }

//         return (
//             <View style={{ flex: 1, paddingTop: 20 }}>
//                 <FlatList
//                     data={this.state.dataSource}
//                     renderItem={this.renderItem}

//                     keyExtractor={({ id }, index) => id}
//                 />
//             </View>
//         );

//     }
// }


render() {
    const { params } = this.props.navigation.state;
    console.log( params )
    return (
        <View style={styles.containerView}>
            <HeaderComponent
            title={"Details"}
            navigation={this.props.navigation}
          />   
            <ImageBackground
                source={{ uri: 'http://bit.ly/2GfzooV' }}
                style={styles.image}
            >
            <View style={styles.overlay}>
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
        height: '30%',
        width: '100%',
        position: 'relative', // because it's parent
        opacity: 0.7,
        // backgroundColor:'#000',
        top: 2,
        left: 2
    },
   overlay: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
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
