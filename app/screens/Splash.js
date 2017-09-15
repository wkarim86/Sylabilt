import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import DatePicker from '../components/DatePicker'
import {Container, Body, Content, Header, Title} from  'native-base';

export default class Splash extends Component{
 
  render (){
    return (     
      
      <Container>
       <Header>
         <Body><Title>Splash Screen</Title></Body>
        </Header>
        <Content padder>
          <DatePicker text="Click me hell" />
           <Image
      source={require('../images/splash.png')}
      style={{flex:1, resizeMode:'cover', width:'100%', height : '100%'}}
          />
           
          
        </Content>
      
      </Container>
    
      
     
      );
  }
}
