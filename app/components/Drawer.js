import React, { Component } from 'react';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import UserSignup from '../screens/UserSignup';
import UserSignin from '../screens/UserSignin';
import EditProfile from '../screens/EditProfile';
import MySyllabi from '../screens/MySyllabi';
import AddEditTask from '../screens/AddEditTask';
import ExportCalendar from '../screens/ExportCalendar';
import ISBNDeals from '../screens/ISBNDeals';
import Friends from '../screens/Friends';
import AddFriends from '../screens/AddFriends';
import AddGroupMeeting from '../screens/AddGroupMeeting';
import GroupMeetings from '../screens/GroupMeetings';
import MeetingDetails from '../screens/MeetingDetails';
import AddClass from '../screens/AddClass';
import ForgotPassword from '../screens/ForgotPassword';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import FileViewer from '../screens/FileViewer';
import Subscribe from '../screens/Subscribe';
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
    addtask  : {screen : AddEditTask},
    edittask : {screen : AddEditTask},
    exportcalendar : {screen : ExportCalendar},
    isbn : {screen : ISBNDeals},
    friends : {screen : Friends},
    addfriends: {screen : AddFriends},
    addmeeting : {screen : AddGroupMeeting},
    groupmeetings : {screen : GroupMeetings},
    meetingdetails : {screen : MeetingDetails},
    addclass : {screen : AddClass},
    forgotpassword : {screen : ForgotPassword},
    settings : {screen : Settings},
    changepassword : {screen : ChangePassword},
    fileviewer : {screen : FileViewer},
    subscribe : {screen : Subscribe},
  },
  {
    initialRouteName : "splash",
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
