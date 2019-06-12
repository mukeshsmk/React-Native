import React, { Component } from 'react';
import { Text, View, Button , ScrollView, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import HeaderComponent from '../components/header';

export default class Notification extends Component {
  render() {
    return (
      <ScrollView>
         <View style={ styles.containerView }>
    
        <HeaderComponent
          title={"Notification"}
          navigation={this.props.navigation}
        /> 
      <View style={ styles.container } >

        <Card style = { styles.cardView } 
        onPress={() => navigate('Newentry')}>
          <CardTitle onPress={() => navigate('Newentry')}
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" onPress={() => navigate('Newentry')}
          />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>

        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    margin: 0

},
  container:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor:'#a9a8b0',
  },
  cardView: {
    backgroundColor:'#e0e9f8',
    margin:3,
  },
})


