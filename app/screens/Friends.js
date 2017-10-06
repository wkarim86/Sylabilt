import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import SearchBox from '../components/SearchBox';
import FriendsList from '../components/FriendsList';

class Friends extends Component{
  constructor(props){
    super(props);

  }


  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title={lang.text_friends} {...this.props} isAddButton={true} addBtnEventListner={() => this.props.navigation.navigate("addfriends", {navigation : this.props.navigation})} />
      <ImageBackground source={require('../image/ExportCalendarBg.png')} style={{width : '100%', height : '100%'}}>
      <Content>
        <View style={{padding : 20}}>
            <SearchBox />
         </View>
         <View style={{padding : 10}}>
         <FriendsList dataList={[{name : "John Mendoza", email: "johnmendoza@gmail.com", id: 1, avatar : require('../image/Home.png')}]}/>
         </View>
      </Content>
      </ImageBackground>

      </Container>
    )
  }


}

export default Friends;
