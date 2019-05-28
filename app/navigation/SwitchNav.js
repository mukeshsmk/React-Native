import { createSwitchNavigator } from 'react-navigation'

import Login from '../screens/login';
import TabNavigator from '../navigation/TabNav';

export const getRootNavigator = (loggedIn = false) => createSwitchNavigator(
  {
    LoggedOut: {
      screen: Login
    },
    LoggedIn: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
  }
);