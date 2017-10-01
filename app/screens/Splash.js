import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Title, Button} from  'native-base';
import Db from '../config/db';
const Realm = require('realm');
export default class Splash extends Component{

  constructor(props){
      super(props);
      this.state = { realm : null};

  }

  componentDidMount(){
    Realm.open({schema : [Db]}).then( realm => {
      console.log("Realm database initialized");
      //insert default settings
      if(realm.objects("settings").length ==  0){
        this.setState({realm});
        setTimeout(()=> {
          this.props.navigation.navigate('signin');
        },1000);
      }else{
        setTimeout(()=> {
          this.props.navigation.navigate('home');
        },1000);
      }
    });
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
