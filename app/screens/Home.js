import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon} from  'native-base';
import Topbar from '../components/Topbar';
export default class Home extends Component{
  render (){
    const {navigate,state} = this.props.navigation;
    
    return (           
      <Container>
      <Topbar title={state.params.name} navigateTo={navigate} />
        <Content padder>         
          
           <Text>Hi, Welcome to Sylabilt React Native</Text>
          
        </Content>
      
      </Container>
    
      
     
      );
  }
}
