import React, { Component } from 'react';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import UserSignup from '../screens/UserSignup';
import UserSignin from '../screens/UserSignin';
import EditProfile from '../screens/EditProfile';
import MySyllabi from '../screens/MySyllabi';
import AddTask from '../screens/AddTask';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Root } from 'native-base';
import Sidebar from './Sidebar';
const Drawer = DrawerNavigator(
  {
    splash : {screen : Splash},
    home : {screen : Home},
    signup : {screen : UserSignup},
    signin : {screen : UserSignin},
    editprofile : {screen : EditProfile},
    mysyllabi : { screen : MySyllabi },
    addtask  : {screen : AddTask}
  },
  {
    initialRouteName : "addtask",
    contentOptions : {
                      activeTintColor : '#e91e63'
                    },
    contentComponent : props => <Sidebar {...props} />
  }
);
export default () =>
  <Root>
    <Drawer />
    </Root>;
