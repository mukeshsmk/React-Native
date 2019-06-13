import React, { Component } from 'react';
import { Text, View,TouchableOpacity, Button, ScrollView, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import HeaderComponent from '../components/header';

export default class Notification extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.containerView}>

          <HeaderComponent
            title={"Notification"}
            navigation={this.props.navigation}
          />
          <View style={styles.container} >

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytasks')}>
            <View style={styles.cardView} >
              <Text style={styles.cardTitle}>all media but select only text</Text>
              <Text style={styles.cardContent}>2019-05-29 18:18:29</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {

    margin: 0

  },
  container: {
    backgroundColor: '#a9a8b0',
  },
  cardView: {
    backgroundColor: '#e0e9f8',
    margin: 3,
  },
  cardTitle: {
    fontSize: 24,
    margin: 10,
    color: '#000000'
  },
  cardContent: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  }
})


