import React, { Component } from 'react';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View, SafeAreaView, Text, Alert,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

import { Card, Left, Body, Right, Container, Header } from "native-base";
import Home from '../screens/home';
import Login from '../screens/login';
import Notification from '../screens/notification';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Mytasks from '../screens/mytasks';

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1 }}>
   
      <Header style={styles.proDetails}>
        
        <Image style={styles.proPic} source={require("../images/profile.png")} />
       
      
      </Header>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <DrawerItems
          {...props}
          itemStyle={styles.navItems}
          labelStyle={styles.navItemText}
        />
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Log out",
              "Do you want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  }
                },
                {
                  text: "Confirm",
                  onPress: () => {
                  props.navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
              }>
          <View style={styles.navItems}>
            <Text style={[styles.navItemText, { margin: 16 }]}>Logout</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
   
  </View>
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login,
  },
  Notification: {
    screen: Notification,
  },
  Screen2: {
    screen: Screen2,
  },
  Screen3: {
    screen: Screen3,
  },
  Mytasks: {
    screen: Mytasks,
  }},
  {
    // initialRouteName: "Home",
    drawerPosition: "Right",
    drawerOpenRoute: "DrawerOpen",
    contentComponent: CustomDrawerContentComponent,
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: 300
  }
);


const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: "white",
    textAlign: "left"
  },
  city: {
    fontSize: 12,
    color: "white"
  },
  proDetails: {
    marginTop: 0,
    height: 150,
    color: "white"
  },
  proPic: {
    height: 130,
    width: 130,
    marginLeft: "5%",
    marginTop: "2%"
  },
  navItems: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fdfdfd"
  },
  navItemText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "300"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5
  }
});

export default createAppContainer(MyDrawerNavigator);