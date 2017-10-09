import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Tab, Tabs, ScrollableTab} from  'native-base';
import Topbar from '../components/Topbar';
import colors from '../strings/colors';
import tabStyle from '../styles/tabs';
import styles from '../styles';
import textStyle from '../styles/text';
import TabAgenda from './partials/tab_agenda';
import TabDay from './partials/tab_day';
import TabWeek from './partials/tab_week';
import TabMonth from './partials/tab_month';
import ActionButtons from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component{
  render (){
    const {navigate,state} = this.props.navigation;
    return (
      <Container>
      <Topbar /*title={state.params.name} */ title="Sylabilt" isSearchButton={true}  {...this.props} />
      <View style={{position:'absolute', zIndex:3, flex:1, justifyContent:'flex-end', alignSelf:'flex-end', bottom:'5%', right : '5%'}}>
        <ActionButtons buttonColor={colors.buttonColor} position="right" degrees={45}>
          <ActionButtons.Item buttonColor={colors.buttonColor} title="Add Friends" onPress={()=>{ navigate("addfriends", {prevRoute : 'home'})}}>
            <Icon name="user-plus" style={styles.iconFont} />
          </ActionButtons.Item>
          <ActionButtons.Item buttonColor={colors.buttonColor} title="Add Group Meeting" onPress={()=>{ navigate("addmeeting", {prevRoute : 'home'})}}>
            <Icon name="group" style={styles.iconFont} />
          </ActionButtons.Item>
          <ActionButtons.Item buttonColor={colors.buttonColor} title="Add Task" onPress={()=> navigate("addtask", {prevRoute : 'home'})}>
            <Icon name="calendar-plus-o" style={styles.iconFont} />
          </ActionButtons.Item>

        </ActionButtons>
      </View>
      <ImageBackground source={require('../image/homebg.png')} style={styles.fullWidth}>
        <Tabs renderTabBar = {() => <ScrollableTab />} tabBarUnderlineStyle={{borderBottomColor : colors.white,
    borderBottomWidth : 4  }} >
          <Tab heading="Agenda" style={{backgroundColor:'transparent'}}  tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabAgenda />
          </Tab>
          <Tab heading="Day" style={{backgroundColor:'transparent'}} tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabDay />
          </Tab>

          <Tab heading="Week" style={{backgroundColor:'transparent'}} tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabWeek />
          </Tab>

          <Tab heading="Month" style={{backgroundColor:'transparent'}} tabStyle={tabStyle.bg} textStyle={tabStyle.text} activeTabStyle={tabStyle.active} activeTextStyle={tabStyle.activeText} >
            <TabMonth />
          </Tab>
        </Tabs>

      </ImageBackground>

      </Container>



      );
  }
}
