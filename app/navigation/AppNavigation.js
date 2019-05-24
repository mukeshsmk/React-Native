import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  StyleSheet
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";

import Login from '../screens/login';
import Home from '../screens/home';


const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1 }}>
    <AppDrawerNavigator />
    <Text>
        Hello
    </Text>
  </View>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    "Login": {
      screen: Login
    }
  });

const styles = StyleSheet.create({
  
});

export default createAppContainer(AppDrawerNavigator);