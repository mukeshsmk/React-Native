import Icon from "react-native-vector-icons/FontAwesome";
import React , { Component }from "react";
import {View, SafeAreaView, AsyncStorage, Text , Alert,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';
import {  Header } from "native-base";
import { createSwitchNavigator, createAppContainer , DrawerItems, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Details from '../screens/details';
import Login from '../screens/login';
import Notification from '../screens/notification';

import Projects from '../screens/projects';
import Moderator from '../screens/moderator';
import Workspaces from '../screens/workspaces';
import Mytasks from '../screens/mytasks';

const TabNavigator = createBottomTabNavigator({
  Details: {
      screen: Details,
      navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={20} color={tintColor} />
      }
  },
  Moderator: {
      screen: Moderator,
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
  Workspaces: {
      screen: Workspaces,
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
}
);

const StackNavigator = createStackNavigator({
  TabNavigator:TabNavigator
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
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
                   
                    AsyncStorage.clear();
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



const DrawerNavigator = createDrawerNavigator({
  Details: { screen: StackNavigator },
  Projects :{screen: Projects },
  Notification: { screen: Notification },
  Moderator: { screen: Moderator },
  Workspaces: { screen: Workspaces },
  Mytasks: { screen: Mytasks }},
  {
    initialRouteName : 'Projects'
  },
  {
    
    drawerPosition: "right",
    drawerOpenRoute: "DrawerOpen",
    contentComponent: CustomDrawerContentComponent,
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: 300
    
})

export const SwitchNavigator = (switchNavroute = false ) =>{
  return createAppContainer(createSwitchNavigator(
  {
    Details: DrawerNavigator ,
    Login: { screen: Login },
  },
  {
    initialRouteName: switchNavroute ? 'Details' : 'Login'
  }
))
}

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
    height: 120,
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





