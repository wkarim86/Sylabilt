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
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import ExportView from './partials/export_view';

class ExplortCalendar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title="Export Calendar" navigateTo={navigate} />
        <ExportView />
      </Container>
    )
  }

}
export default ExplortCalendar;
