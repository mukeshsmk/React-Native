
import React, { Component } from 'react';
import {  AsyncStorage } from 'react-native';


import { SwitchNavigator } from './app/navigation/AppNavigator';

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
