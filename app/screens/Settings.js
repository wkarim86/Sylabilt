import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyles from '../styles/text';

class Settings extends Component {
  constructor(props){
    super(props);

  }


    render(){
      const {navigate} = this.props.navigation;
      return(
        <Container>
        <Topbar title={lang.text_settings} {...this.props} navigateTo={navigate}/>
        <ImageBackground source={require('../image/settingsbg.png')} style={{width:'100%', height: '100%'}}>
        <Content>
          <Text>Settings goes here</Text>
        </Content>
        </ImageBackground>
        </Container>
      )
  }
}

export default Settings;
