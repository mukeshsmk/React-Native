// import React from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   Alert,
//   Image,
//   StyleSheet
// } from "react-native";
// import {
//   createDrawerNavigator,
//   createAppContainer,
//   DrawerItems
// } from "react-navigation";

// import Login from '../screens/login';
// import Home from '../screens/home';


// const CustomDrawerContentComponent = props => (
//   <View style={{ flex: 1 }}>
//     <AppDrawerNavigator />
//     <Text>
//         Hello
//     </Text>
//   </View>
// );

// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     "Login": {
//       screen: Login
//     }
//   });

// const styles = StyleSheet.create({
  
// });

// export default createAppContainer(AppDrawerNavigator);

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AppNavigation extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
