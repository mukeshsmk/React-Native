
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';

import StackNavigator from './app/navigation/StackNav';
import TabNavigator from './app/navigation/TabNav'
import MyDrawerNavigator from './app/navigation/Drawernav';
import { SwitchNavigator } from './app/navigation/AppNavigator';
import SwitchNav from './app/navigation/SwitchNav';
import Projects from './app/screens/projects';

import Login from './app/screens/login';
import Api from './app/screens/api';

//comonents
import Loading from './app/components/loader';
type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      loading: true,
    }
  }
  componentDidMount() {
    AsyncStorage.multiGet(['isLoggedIn']).then((data) => {
      if(data[0][1] == null){
        data[0][1] = false ;
      }
      console.log(data);
      this.setState({ 
        isLoggedIn: data[0][1] ? true : false ,
        loading:false
      })

    });
  }
  render() {
    if ((this.state.loading && !this.state.isLoggedIn)) {
      return (
        <Loading />
      )
    } else {
      const RootNavigator = SwitchNavigator(this.state.isLoggedIn);
      return <RootNavigator />
    }
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