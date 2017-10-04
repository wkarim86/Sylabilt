import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Left, Right, Header, Footer} from 'native-base';
import colors from '../strings/colors';
import sidebarStyle from '../styles/sidebar';
import Db from '../config/db';
var db = new Db();
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
    if(Db.getCount(Db.SettingsSchema) > 0) {
      var isLoggedIn = Db.get(Db.SettingsSchema)[0].isLoggedIn;
      if( isLoggedIn ){
        this.state = {isLoggedIn : isLoggedIn};
        if(this.state.isLoggedIn){
          menus[9].title = "Logout";
          menus[9].icon = require("../image/logoutico.png");
        }
      }
    }



  }

logout(){
  db.insert({schema:Db.schema.name, values :[{id:1, isLoggedIn : false}], isUpdate : true});
  this.props.navigation.navigate("signin");
}


  render() {
    return(
      <Container>
      <Header style={{backgroundColor: colors.headerColor}}>
        <Left>
          <Text>Username</Text>
        </Left>
        <Right>
          <Image source={require('../image/editprofileico.png')} style={{ width:40, height:40, resizeMode:'contain'}} />
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
