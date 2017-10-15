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
import Http from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import SearchBox from '../components/SearchBox';
import FriendsList from '../components/FriendsList';
Global  = require('../lib/global');
class Friends extends Component{
  constructor(props){
    super(props);
    this.loadFriendList();
    const tempData = [{name : "John Mendoza", email: "johnmendoza@gmail.com", id: 1, avatar : require('../image/Home.png')}];
    this.state = { friendlist : tempData};
    
  }

  loadFriendList = () =>{
    const url  = Config.endPointLocal + Config.apis.friendList + Global.userInfo.id;
    console.log(url);
    Http.get(url)
    .then((responseJson) => {
      const response = responseJson.data;
      if(!response.error){
        console.log(response.data.data);
      }
    }).catch( (error) => {
      console.log(error);
    })
  }

  refreshData = () =>{
    const ds = [{name : "Waqas Karim", email: "wkarim@gmail.com", id: 1, avatar : require('../image/Home.png')},{name : "Shabih Fatima", email: "shabih.fatima@gmail.com", id: 2, avatar : require('../image/Home.png')}];
    this.setState({friendlist : ds});
  }

  searchbox = (value) => {
    this.refreshData();
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title={lang.text_friends} {...this.props} isAddButton={true} addBtnEventListner={() => this.props.navigation.navigate("addfriends", {prevRoute : "friends"})} />
      <ImageBackground source={require('../image/ExportCalendarBg.png')} style={{width : '100%', height : '100%'}}>
      <Content>
        <View style={{padding : 20}}>
            <SearchBox onChangeText = {this.searchbox}/>
         </View>
         <View style={{padding : 10}}>
         <FriendsList dataList={this.state.friendlist}/>
         </View>
      </Content>
      </ImageBackground>

      </Container>
    )
  }


}

export default Friends;
