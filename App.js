
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import StackNavigator from './app/navigation/StackNav';
import TabNavigator from './app/navigation/TabNav'
import MyDrawerNavigator from './app/navigation/Drawernav';
import SwitchNavigator from './app/navigation/AppNavigator';
// import { DrawerNavigator } from 'react-navigation';

// import Home from './app/screens/home';
import Login from './app/screens/login';
// import Screen1 from './app/screens/screen1';

type Props = {};
export default class App extends Component<Props> {  
  render() {
    return (
     
      <SwitchNavigator /> 

    );
  }
}


// const myApp = DrawerNavigator({
//   Home:{
//     screen : Home,
//   },
//   Login:{
//     screen : Login,
//   },
//   Screen1:{
//     screen : Screen1,
//   }
// })