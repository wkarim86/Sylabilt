import Splash from '../screens/Splash';
import Home from '../screens/Home';
import { DrawerNavigator } from 'react-navigation';

const Drawer = DrawerNavigator(
  {
    Splash : {screen : Splash},
    Home : {screen : Home}
  },
  {
    initialRouteName : "Splash",
    contentOptions : {
                               activeTintColor : '#e91e63'
                    }
  }
);
export default Drawer;