import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Left, Right, Header, Footer, Thumbnail} from 'native-base';
import colors from '../strings/colors';
import textStyle from '../styles/text';
import sidebarStyle from '../styles/sidebar';
import Config from '../config/settings';
import Db from '../config/db';
var db = new Db();
Global = require('../lib/global');
const menus = [
    {
      title : 'Home',
      route : 'home',
      icon  : require('../image/homeicon.png')
    },
    {
      title : 'Subscribe',
      route : 'subscribe',
      icon  : require('../image/subscribeico.png')
    },
    {
      title : 'Edit Profile',
      route : 'editprofile',
      icon  : require('../image/editprofileico.png')
    },
    {
      title : 'My Syllabi',
      route : 'mysyllabi',
      icon  : require('../image/mysylabiltico.png')
    },
    {
      title : 'ISBN Book Deals',
      route : 'isbn',
      icon  : require('../image/isbnico.png')
    },
    {
      title : 'Export Calendar',
      route : 'exportcalendar',
      icon  : require('../image/exportCalenderico.png')
    },
    {
      title : 'Friends',
      route : 'friends',
      icon  : require('../image/friendsico.png')
    },
    {
      title : 'Share App',
      route : 'shareapp',
      icon  : require('../image/shareico.png')
    },
    {
      title : 'Settings',
      route : 'settings',
      icon  : require('../image/settingsico.png')
    },
    {
      title : 'Login',
      route : 'signin',
      icon  : require('../image/loginico.png')
    }
  ];



class Sidebar extends Component{
  constructor(props){
    super(props);
    const profilePic = (Global.userInfo.profile_pic) ? { uri : Config.resourceUrl + Global.userInfo.profile_pic} : require('../image/editprofileico.png');
    this.state = {isLoggedIn : Global.loggedin, avatar : profilePic};
    console.log('sidebar', this.state.avatar, Global.userInfo.profile_pic);
  }

logout(){
  db.insert({schema:Db.SettingsSchema.name, values :[{id:1, isLoggedIn : false}], isUpdate : true});
  Global.loggedin = false;
  this.setState({isLoggedIn : false});
  this.props.navigation.navigate("signin");
}

componentWillMount = () =>{
  if(this.state.isLoggedIn){
    menus[9].title = "Logout";
    menus[9].icon = require("../image/logoutico.png");
  }

}


static refreshList(){
  menus[9].title = "Logout";
  menus[9].icon = require("../image/logoutico.png");
}

  render() {
    return(
      <Container>
      <Header style={{backgroundColor: colors.headerColor}}>
        <Left>
          <Text style={textStyle.labelUsername} ellipsizeMode='tail' numberOfLines={1}>{Global.userInfo.name}</Text>
        </Left>
        <Right>
          <Thumbnail source={this.state.avatar} small/>
        </Right>
        </Header>
      <Content>
        <List dataArray = {menus}
          renderRow = {(data,sectionID, rowID) => <ListItem icon button noBorder
                                 onPress={() => (rowID == 9) ? this.logout(): this.props.navigation.navigate(data.route)}
                                 style={{ height:50}}>
           <Left>
            <Image source={data.icon} style={ {width:30, height:30, resizeMode : 'contain'} } />
            </Left>
            <Body style={{borderBottomWidth:0}}>
               <Text style={sidebarStyle.menuItem}>{data.title}</Text>

            </Body>

          </ListItem>}
          />


        </Content>
         <Footer style={sidebarStyle.footer}>
          <Right>
            <Text>Privacy Policy</Text>
          </Right>
        </Footer>
      </Container>
    )
  }
}

export default Sidebar;
