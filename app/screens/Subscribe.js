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


          <Text style={[textStyle.headingBradley,{color : 'white', fontSize:40, textAlign:'center'}]}>Pricing</Text>
          <Grid>
          <Row>
            <Col size={1} style={{backgroundColor:'rgba(0, 0, 0,0.5)'}}>

                <Text style={[textStyle.subscribePackageHeading, {backgroundColor:'#000000'} ] }>FREE .0</Text>
                <Text style={textStyle.packageListText}>ADS</Text>
                <Text style={textStyle.packageListText}>ISBN READER</Text>
                <Text style={textStyle.packageListText}>SHARE TASKS</Text>
                <Text style={textStyle.packageListText}>REMINDERS</Text>
                <Text style={textStyle.packageListText}>UPLOAD SYLLABUS</Text>

            </Col>
            <Col size={1} style={{backgroundColor:'rgba(222, 148, 55,0.5)'}}>
              <Text style={[textStyle.subscribePackageHeading, {backgroundColor:'rgb(222, 148, 55)'} ] }>Flow 2.0</Text>
              <Text style={textStyle.packageListText}>NO ADS</Text>
              <Text style={textStyle.packageListText}>ISBN READER</Text>
              <Text style={textStyle.packageListText}>SHARE TASKS</Text>
              <Text style={textStyle.packageListText}>REMINDERS</Text>
              <Text style={textStyle.packageListText}>UPLOAD SYLLABUS</Text>
              <Text style={textStyle.packageListText}>CHANGE THEME</Text>
              <Text style={textStyle.packageListText}>IMPORT SCHEDULE (FROM IOS AND GOOGLE CALENDAR)</Text>

            </Col>
            <Col size={1} style={{ backgroundColor: 'rgba(129, 23, 14,0.5)'}}>
              <Text style={[textStyle.subscribePackageHeading, {backgroundColor:'rgb(129, 23, 14)'} ] }>Go 4.0</Text>
              <Text style={textStyle.packageListText}>NO ADS</Text>
              <Text style={textStyle.packageListText}>ISBN READER</Text>
              <Text style={textStyle.packageListText}>SHARE TASKS</Text>
              <Text style={textStyle.packageListText}>REMINDERS</Text>
              <Text style={textStyle.packageListText}>UPLOAD SYLLABUS</Text>
              <Text style={textStyle.packageListText}>CHANGE THEME</Text>
              <Text style={textStyle.packageListText}>IMPORT/EXPORT SCHEDULE (FROM IOS AND GOOGLE CALENDAR)</Text>

            </Col>
            </Row>
            <Row size={0.28}>
              <Col style={{padding:10}}><Button style={styles.buttonGreen}><Text style={textStyle.subscribePackageHeading}>FREE</Text></Button></Col>
              <Col style={{padding:10}}><Button style={styles.buttonGreen}><Text style={textStyle.subscribePackageHeading}>$ 2.99</Text></Button></Col>
              <Col style={{padding:10}}><Button style={styles.buttonGreen}><Text style={textStyle.subscribePackageHeading}>$ 3.99</Text></Button></Col>
            </Row>

          </Grid>

        </ImageBackground>
      </Container>
    )
  }
}
export default Subscribe;
