import React, { Component } from 'react';
import { Text, View ,Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Menu"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
