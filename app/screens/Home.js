import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {Container, Body, Content, Header} from  'native-base';

export default class Home extends Component{
  render (){
    return (           
      <Container>
       <Header>
         <Text>Home Screen</Text>
        </Header>
        <Content padder>         
          
           <Text>Hi, Welcome to Sylabilt React Native</Text>
          
        </Content>
      
      </Container>
    
      
     
      );
  }
}
