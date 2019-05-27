import React, { Component } from 'react';
import { Text, View, Button , ScrollView, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class Notification extends Component {
  render() {
    return (
      <ScrollView>
      <View style={ styles.container }>
    
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
        <Card style = { styles.cardView }>
          <CardTitle
             title="all media but select only text"
          />
          <CardContent text="2019-05-29 18:18:29" />
        </Card>
        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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


