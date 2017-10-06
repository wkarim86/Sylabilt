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
import Checkbox from 'react-native-check-box';

class Settings extends Component {
  constructor(props){
    super(props);

  }

  toggleCheckbox(trigger){
    if(trigger){
      return false;
    }else{
      return true;
    }
  }


    render(){
      const {navigate} = this.props.navigation;
      return(
        <Container>
        <Topbar title={lang.text_settings} {...this.props}/>
        <ImageBackground source={require('../image/settingsbg.png')} style={{width:'100%', height: '100%'}}>
        <Content>
          <Grid>
            <Row size={0.2} style={{justifyContent:'flex-end'}}>
                <Button transparent>
                  <Image source={require('../image/confirm.png')} style={{width:140, resizeMode:'contain'}} />
                </Button>
            </Row>
            <Row size={0.8} style={[styles.paddingAround, {flexDirection:'column'}]}>

              <Text style={[textStyles.textWhiteBig30,{flex:1}]}>Sound Notifications</Text>
              <List>
                <ListItem style={{flex:1}} button>
                  <Body style={{flex:1}}>
                    <Text>Home</Text>
                  </Body>
                  <Right style={{flex:0.3}}>


                  </Right>
                </ListItem>
              </List>

            </Row>
          </Grid>
        </Content>
        </ImageBackground>
        </Container>
      )
  }
}

export default Settings;
