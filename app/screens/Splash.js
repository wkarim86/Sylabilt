import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';
import DatePicker from '../components/DatePicker'
import {Container, Body, Content, Header, Title, Button} from  'native-base';

export default class Splash extends Component{

  constructor(props){
      super(props);
    setTimeout(()=> {
      this.props.navigation.navigate('signin');
    },500);
  }

  render (){
    const {navigate} = this.props.navigation;

    return (

      <Container>
       <Header>
         <Body><Title>Splash Screen</Title></Body>
        </Header>
        <Content padder>
          <Image
            source={require('../image/homeicon.png')} style={{width:50, height:50}}
            />

          <Button primary full
            onPress={()=> navigate('home')}>
            <Text>Launch Home Screen</Text>
          </Button>
           <Image
      source={require('../image/homeicon.png')}
      style={{flex:1, resizeMode:'cover', width:'100%', height : '100%'}}
          />


        </Content>

      </Container>



      );
  }
}
