import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  SegmentedControlIOS

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyle from '../styles/text';
import PickerView from '../components/PickerView';
import DateTimePicker from 'react-native-datepicker';
import Http from '../lib/http';
import Config from '../config/settings';
import Loader from '../components/Loader';
Global  = require('../lib/global');

class Subscribe extends Component{
  constructor(props){
    super(props);
    this.state = {isLoading : false};
  }
  render(){
    return(
      <Container>
        <Loader show={this.state.isLoading} size="large"/>
        <Topbar title={lang.text_subscribe} {...this.props} />

        <ImageBackground source={require('../image/subscribebg.png')} style={{width : '100%', height:'100%'}}>

        <Content>
          <Text style={[textStyle.headingBradley,{color : 'white', fontSize:40, textAlign:'center'}]}>Pricing</Text>
          <Grid>
            <Col size={1}>
              <List>
                <ListItem style={{borderBottomWidth:0}}><Text style={textStyle.subscribePackageHeading}>FREE .0</Text></ListItem>
                <ListItem style={{borderBottomWidth:0}}><Text style={textStyle.packageListText}>ADS</Text></ListItem>
                <ListItem style={{borderBottomWidth:0}}><Text style={textStyle.packageListText}>ADS</Text></ListItem>
              </List>
            </Col>
            <Col size={1}>
              <List>
                <ListItem style={{borderBottomWidth:0}}><Text style={textStyle.subscribePackageHeading}>Flow 2.0</Text></ListItem>
              </List>
            </Col>
            <Col size={1}>
              <List>
                <ListItem style={{borderBottomWidth:0}}><Text style={textStyle.subscribePackageHeading}>Go 4.0</Text></ListItem>
              </List>
            </Col>
          </Grid>

        </Content>
        </ImageBackground>
      </Container>

    )
  }
}
export default Subscribe;
