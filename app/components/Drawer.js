import React, { Component } from 'react';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Sidebar from './Sidebar';
const Drawer = DrawerNavigator(
  {
    splash : {screen : Splash},
    home : {screen : Home}
  },
  {
    initialRouteName : "splash",
    contentOptions : {
                      activeTintColor : '#e91e63'
                    },
    contentComponent : props => <Sidebar {...props} />
  }
);
export default Drawer;