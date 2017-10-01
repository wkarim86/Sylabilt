import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Tab, Tabs, ScrollableTab} from  'native-base';
import Topbar from '../components/Topbar';
import colors from '../strings/colors';
import tabStyle from '../styles/tabs';
import TabAgenda from './partials/tab_agenda';
import TabDay from './partials/tab_day';
import TabWeek from './partials/tab_week';
import TabMonth from './partials/tab_month';
export default class Home extends Component{
  render (){
    const {navigate,state} = this.props.navigation;

    return (
      <Container>
      <Topbar /*title={state.params.name} */  navigateTo={navigate} />
        <Tabs renderTabBar = {() => <ScrollableTab />} tabBarUnderlineStyle={{borderBottomColor : colors.white,
    borderBottomWidth : 4  }} >

          <Tab heading="Agenda" tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabAgenda />
          </Tab>
          <Tab heading="Day" tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabDay />
          </Tab>

          <Tab heading="Week" tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabWeek />
          </Tab>

          <Tab heading="Month" tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabMonth />
          </Tab>
        </Tabs>

      

      </Container>



      );
  }
}
