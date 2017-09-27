import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles/signup';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';

class AddTask extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title="Add Task" navigateTo={navigate} />
      <ImageBackground source={require('../image/agendabg.png')} style={{width: '100%', height : '100%'}}>
      <Content>
        <View style={styles.alignCenter, styles.paddingAround}>
          <Button transparent>
            <Image source={require('../image/confirm.png')} />
            </Button>
        </View>
      </Content>
      </ImageBackground>
      </Container>
    )
  }

}
export default AddTask;
