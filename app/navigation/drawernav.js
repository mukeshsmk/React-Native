import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import Home from '../screens/home';
import Login from '../screens/login';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';


const Tabs = createMaterialTopTabNavigator({
    Home: Home,
    About: About,
    Contact: Contact
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

// Drawer Navigator
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login,
  },
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
  Screen3: {
    screen: Screen3,
  },
  Screen4: {
    screen: Screen4,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);