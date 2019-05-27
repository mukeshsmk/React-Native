import {createStackNavigator, createAppContainer} from 'react-navigation';


import Home from './../screens/home';
import Login from './../screens/login';
import Projects from '../../app/components/projects';
import Details from '../screens/details';
import Notification from '../screens/notification';
import Screen2 from './../screens/screen2';
import Screen3 from './../screens/screen3';
import Mytasks from '../screens/mytasks';


const AppNavigator = createStackNavigator({
    Home:{
        screen:Home,
      },
      Login:{
        screen:Login,
      },
      Projects:{
        screen:Projects,
      },
      Details:{
        screen:Details,
      },
      Notification:{
        screen: Notification,
      },
      Screen2:{
        screen: Screen2,
      },
      Screen3:{
        screen: Screen3,
      },
      Mytasks:{
        screen: Mytasks,
      },
    }, {
        initialRouteName: 'Login',
    });
  
  export default createAppContainer(AppNavigator);