import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Left, Right, Header, Footer} from 'native-base';
import colors from '../strings/colors';
import sidebarStyle from '../styles/sidebar';
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
          renderRow = {data => <ListItem icon button noBorder 
                                 onPress={() => this.props.navigation.navigate(data.route)}
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

