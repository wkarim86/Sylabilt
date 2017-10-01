import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  Alert
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import ExportView from './partials/export_view';
import ExportError from './partials/export_error_view';
import lang from '../strings/values_en';

class ExplortCalendar extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount = () => {
    Alert.alert(
      lang.alertdialog_heading_export,
      lang.alertdialog_text,
      [{text : 'Not Now', style:'cancel'}, {text: 'Subscribe', onPress : ()=> {alert('Subscribe')}}],
      {cancelable: true}
      )
  }

  render(){
    const {navigate} = this.props.navigation;
    const isPaidMember = false;
    return(
      <Container>
      <Topbar title="Export Calendar" navigateTo={navigate} />
      {Utils.renderIf(isPaidMember, <ExportView />)}
      {Utils.renderIf(!isPaidMember, <ExportError />)}


      </Container>
    )
  }

}
export default ExplortCalendar;
