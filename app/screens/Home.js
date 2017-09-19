import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Tab, Tabs, ScrollableTab} from  'native-base';
import Topbar from '../components/Topbar';
import TabAgenda from './partials/tab_agenda';
import TabDay from './partials/tab_day';
export default class Home extends Component{
  render (){
    const {navigate,state} = this.props.navigation;
    
    return (           
      <Container>
      <Topbar /*title={state.params.name} */ navigateTo={navigate} />
        <Tabs renderTabBar = {() => <ScrollableTab />}>
        
          <Tab heading="Agenda">
            <TabAgenda />
          </Tab>
          <Tab heading="Day">
            <TabDay />
          </Tab>
          
          <Tab heading="Week">
          </Tab>
        
          <Tab heading="Month">
          </Tab>
        </Tabs>
        
        <Content padder>         
          
           <Text>Hi, Welcome to Sylabilt React Native</Text>
          
        </Content>
      
      </Container>
    
      
     
      );
  }
}
