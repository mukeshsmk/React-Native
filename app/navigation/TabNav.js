import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Notification from '../screens/notification';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import Mytasks from '../screens/mytasks';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Profile",
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
    },
});

export default createAppContainer(TabNavigator);
