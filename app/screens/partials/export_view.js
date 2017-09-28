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
import colors from '../../strings/colors';
import styles from '../../styles';
import textStyles from '../../styles/text';
import lang from '../../strings/values_en';

class ExportView extends Component{
  render(){
    return(
      <ImageBackground source={require('../../image/ExportCalendarBg.png')} style={styles.fullWidth}>
      <Content>
      <Grid>
        <Row style={{flex: 1}}>
        </Row>
        <Row style={{flex : 2}}>
        <Text>{lang.export_calendar_content}</Text>
        </Row>
      </Grid>
      </Content>
      </ImageBackground>
    )
  }
}
export default ExportView;
