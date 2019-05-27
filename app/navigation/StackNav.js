import {createStackNavigator, createAppContainer} from 'react-navigation';


import Home from './../screens/home';
import Login from './../screens/login';
import Projects from '../../app/components/projects';
import Details from '../screens/details';
import Screen1 from './../screens/screen1';
import Screen2 from './../screens/screen2';
import Screen3 from './../screens/screen3';
import Screen4 from './../screens/screen4';


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
      Screen1:{
        screen: Screen1,
      },
      Screen2:{
        screen: Screen2,
      },
      Screen3:{
        screen: Screen3,
      },
      Screen4:{
        screen: Screen4,
      },
    }, {
        initialRouteName: 'Login',
    });
  
  export default createAppContainer(AppNavigator);