
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import {View, SafeAreaView, Text, Alert,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';
import { Card, Left, Body, Right, Container, Header } from "native-base";
import { createSwitchNavigator, createAppContainer , DrawerItems, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from '../screens/home';
import Login from '../screens/login';
import Notification from '../screens/notification';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Mytasks from '../screens/mytasks';

const TabNavigator = createBottomTabNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={20} color={tintColor} />
      }
  },
  Screen2: {
      screen: Screen2,
      navigationOptions: {
          tabBarLabel: "Moderator",
          tabBarIcon: ({ tintColor }) => <Icon name={"users-medical"} size={20} color={tintColor} />
      }
  },
  Notification: {
      screen: Notification,
      navigationOptions: {
          tabBarLabel: "Notification",
          tabBarIcon: ({ tintColor }) => <Icon name={"bell"} size={20} color={tintColor} />
      }
  },
  Screen3: {
      screen: Screen3,
      navigationOptions: {
          tabBarLabel: "Workspaces",
          tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={20} color={tintColor} />
      }
  },
  Mytasks: {
      screen: Mytasks,
      navigationOptions: {
          tabBarLabel: "My Tasks",
          tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={20} color={tintColor} />
      }
  }
},
{
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  }
}
);

const StackNavigator = createStackNavigator({
  TabNavigator:TabNavigator
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="bars"
          size={30}
        />
      )
    };
  }
}
);

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
         onPress={this._userLogout}>
          <View style={styles.navItems}>
            <Text style={[styles.navItemText, { margin: 16 }]}>Logout</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
   
  </View>
);

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: StackNavigator },
  Login: { screen: Login },
  Notification: { screen: Notification },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
  Mytasks: { screen: Mytasks }},
  {
    drawerPosition: "Right",
    drawerOpenRoute: "DrawerOpen",
    contentComponent: CustomDrawerContentComponent,
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: 300
    
})

const SwitchNavigator = createSwitchNavigator({
  Home: { screen: DrawerNavigator },
  Login: { screen: Login },
});

export default createAppContainer(SwitchNavigator)

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