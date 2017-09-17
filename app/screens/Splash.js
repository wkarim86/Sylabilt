import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import DatePicker from '../components/DatePicker'
import {Container, Body, Content, Header, Title, Button} from  'native-base';

export default class Splash extends Component{
 
  render (){
    const {navigate} = this.props.navigation;
    
    return (     
      
      <Container>
       <Header>
         <Body><Title>Splash Screen</Title></Body>
        </Header>
        <Content padder>
          <Button primary full
            onPress={()=> navigate('home',{name:"Hello world"})}>
            <Text>Launch Home Screen</Text>
          </Button>
           <Image
      source={require('../images/splash.png')}
      style={{flex:1, resizeMode:'cover', width:'100%', height : '100%'}}
          />
           
          
        </Content>
      
      </Container>
    
      
     
      );
  }
}
