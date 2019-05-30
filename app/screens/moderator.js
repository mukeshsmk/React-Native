import React, { Component } from 'react';
import { Text, View , StyleSheet, Button } from 'react-native';
import HeaderComponent from '../components/header';

export default class Moderator extends Component {
  render() {
    return (
      <View style={styles.containerView}>
      <HeaderComponent
         title={"Workspaces"}
         navigation={this.props.navigation}
       />   
        <Text> Moderator</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
      flex: 1,
      margin: 0

  },
})
