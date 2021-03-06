import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Title, Button} from  'native-base';
import Utils from '../lib/utils';
import Db from '../config/db';
Global  = require('../lib/global');
const db = new Db();

export default class Splash extends Component{

  constructor(props){
      super(props);
      if(db.getCount(Db.SettingsSchema) > 0){
        Global.loggedin = db.get(Db.SettingsSchema)[0].isLoggedIn;
        Global.userInfo = db.get(Db.UserSchema)[0];
      }

  }

  componentDidMount(){
    //insert first time data
    if(db.getCount(Db.SettingsSchema) == 0){
        //db.insert({schema : Db.schema.name, values:[{id: 1,username : "", password : "", email : "", uid : "0", isLoggedIn : false}], isUpdate : false})
        db.insert({schema:Db.SettingsSchema.name, values :[{id:1, isLoggedIn : false}], isUpdate : false});

        db.insert({ schema : Db.UserSchema.name,
          values :[
              {
                id : 1,
                user_id : 0
              }
            ],
            isUpdate : false
          }
        );

      }

    if(db.get(Db.SettingsSchema)[0].isLoggedIn) {
      setTimeout(()=> {
        Utils.loadUserProfile(Global.userInfo.user_id);
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
