import React, { Component } from 'react';
import { Text, View , Button } from 'react-native';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Screen 3</Text>
        <Button
         onPress={() => this.props.navigation.navigate('Screen4')}
          title="Click"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
