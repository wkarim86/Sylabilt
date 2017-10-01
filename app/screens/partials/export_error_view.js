import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight

} from 'react-native';
import {Container, Body, Content, Header, Footer, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../../strings/colors';
import styles from '../../styles';
import textStyles from '../../styles/text';
import lang from '../../strings/values_en';

class ExportError extends Component {
  render(){
    return(
        <Grid>
          <Row size={0.5} style={styles.paddingAround}>
              <Text style={textStyles.exportError}>{lang.heading_error_export}</Text>
          </Row>
          <Row size={0.8} style={styles.alignCenter}>
              <Image source={require('../../image/subscribe.png')} style={{resizeMode:'contain', width : 120, alignSelf : 'center'}}/>
          </Row>
          <Row size={1} style={styles.alignCenter}>
            <Image source={require('../../image/pencils.png')} style={{resizeMode:'contain', alignSelf : 'center'}}/>
          </Row>
        </Grid>
    );
  }
}

export default ExportError;
