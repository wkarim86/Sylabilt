import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Label, Input, ListItem, List, Thumbnail, Tab, Tabs, TabHeading, ScrollableTab} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import colors from '../strings/colors';
import tabStyle from '../styles/tabs';
import lang from '../strings/values_en';
import SearchBox from '../components/SearchBox';
import InviteFriendByPhone from '../screens/partials/invite_friend_phone';
import InviteFriendByEmail from '../screens/partials/invite_friend_email';
import Icon from 'react-native-vector-icons/FontAwesome';
import InviteFriendList from '../components/InviteFriendList';

class AddFriends extends Component{
  constructor(props){
    super(props);

  }


  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title={lang.text_add_friend} {...this.props} backKey="friends" navigateTo={navigate} isAddButton={true} isBackButton={true}/>
      <ImageBackground source={require('../image/ExportCalendarBg.png')} style={{width : '100%', height : '100%'}}>
      <Content>
        <View style={{padding : 20}}>
            <SearchBox />
         </View>
         <View style={{padding : 10}}>

         <Tabs renderTabBar = {() => <ScrollableTab />} tabBarUnderlineStyle={{borderBottomColor : colors.green,
     borderBottomWidth : 4  }} >

           <Tab heading={<TabHeading><Icon name="facebook" size={30}/></TabHeading>}  style={{backgroundColor:'transparent'}} >
             <InviteFriendList dataList={[{name : "John Mendoza", email: "johnmendoza@gmail.com", id: 1, avatar : require('../image/Home.png')}]}/>
           </Tab>
           <Tab heading={<TabHeading><Icon name="twitter" size={30}/></TabHeading>} style={{backgroundColor:'transparent'}} >
             <Text>Facebook friends list goes here</Text>
           </Tab>
           <Tab heading={<TabHeading><Icon name="instagram" size={30}/></TabHeading>} style={{backgroundColor:'transparent'}} >
             <Text>Facebook friends list goes here</Text>
           </Tab>
           <Tab heading={<TabHeading><Icon name="phone" size={30}/></TabHeading>} style={{backgroundColor:'transparent'}} >
             <InviteFriendByPhone />
           </Tab>
           <Tab heading={<TabHeading><Icon name="envelope" size={30}/></TabHeading>} style={{backgroundColor:'transparent'}} >
             <InviteFriendByEmail />
           </Tab>
           </Tabs>

         </View>
      </Content>
      </ImageBackground>

      </Container>
    )
  }


}

export default AddFriends;
