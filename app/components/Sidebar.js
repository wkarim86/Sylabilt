import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Container, Content, List, ListItem, Text, Body} from 'native-base';
const menus = [
    {
      title : 'Home',
      route : 'home',
      icon  : 'home-ico'
    },
    {
      title : 'Subscribe',
      route : 'subscribe',
      icon  : 'subscribe-icon'
    },
    {
      title : 'Edit Profile',
      route : 'editprofile',
      icon  : 'edit-profile-icon'
    },
    {
      title : 'My Syllabi',
      route : 'mysyllabi',
      icon  : 'mysyllabi-icon'
    },
    {
      title : 'ISBN Book Deals',
      route : 'isbn',
      icon  : 'isbn-icon'
    },
    {
      title : 'Export Calendar',
      route : 'exportcalendar',
      icon  : 'export-calendar-icon'
    },
    {
      title : 'Friends',
      route : 'friends',
      icon  : 'friends-icon'
    },
    {
      title : 'Share App',
      route : 'shareapp',
      icon  : 'share-app-icon'
    },
    {
      title : 'Settings',
      route : 'settings',
      icon  : 'settings-icon'
    },
    {
      title : 'Login',
      route : 'signin',
      icon  : 'login-icon'
    }
  ];
  
class Sidebar extends Component{
  constructor(props){
    super(props);
  }
  
  
  render() {
    return(
      <Container>
      <Content>
        <List dataArray = {menus}
          renderRow = {data => <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}> 
            <Text>{data.title}</Text>
          </ListItem>}
          />
        </Content>
      </Container>
    )
  }
}

export default Sidebar;

