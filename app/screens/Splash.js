import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Title, Button} from  'native-base';
import Db from '../config/db';

export default class Splash extends Component{

  constructor(props){
      super(props);
      this.state = { realm : null};

  }

  componentDidMount(){
    const db = new Db();
    if(Db.getCount() > 0){
      setTimeout(()=> {
         this.props.navigation.navigate('home');
       },1000);
    }else{
      setTimeout(()=> {
         this.props.navigation.navigate('signin');
       },1000);
    }
  }

  render (){
    const {navigate} = this.props.navigation;

    return (

      <Container>
       <ImageBackground source={require('../image/splash.png')} style={{width:'100%', height : '100%'}}>
       </ImageBackground>
      </Container>



      );
  }
}
