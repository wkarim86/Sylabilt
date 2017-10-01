import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableHighlight

} from 'react-native';
import {Container, Body, Content, Header, Footer, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../../strings/colors';
import styles from '../../styles';
import textStyles from '../../styles/text';
import lang from '../../strings/values_en';
import Utils from '../../lib/utils';

class ExportView extends Component{
  render(){
    return(
      <ImageBackground source={require('../../image/ExportCalendarBg.png')} style={styles.fullWidth}>

        <Grid>
          <Row size={1}>
          </Row>
          <Row size={0.5}>
          <View style={styles.paddingAround}>
              <Text style={[textStyles.labelWhiteItalic, textStyles.textAlignCenter]}>{lang.export_calendar_content}</Text>

          </View>
          </Row>
          <Row size={0.5} style={{flexDirection : 'column'}} >
            <KeyboardAvoidingView style={styles.paddingAround} behavior="padding">
            <TextInput placeholder="Email" style={[styles.inputFieldWhite,styles.marginHorizontal]}
              placeholderTextColor={colors.white}
              keyboardType="email-address"
              ref="email"
            />
          </KeyboardAvoidingView>
          </Row>
          <Row size={0.5}>
              <View style={styles.alignCenter}>
                  <Text style={[styles.orLabel, {color : colors.white, flex: 1}]}>{lang.text_or}</Text>
              </View>
          </Row>
          <Row size={0.5}>
              <View style={styles.alignCenter}>
                  <Text style={textStyles.downloadPDF}>{lang.text_download_version}</Text>
              </View>
          </Row>
          <Row size={2} style={{flexDirection : 'column', flex: 1}}>

          <View style={{flex: 1, justifyContent : 'space-between', flexDirection : 'row', paddingRight : 15, paddingLeft : 15}}>
            <TouchableHighlight>
              <Text style={textStyles.textLinkWhite17}>{lang.text_cancel}</Text>
            </TouchableHighlight>

            <TouchableHighlight>
              <Text style={textStyles.textLinkWhite17}>{lang.text_export}</Text>
            </TouchableHighlight>
          </View>



          </Row>
        </Grid>

      </ImageBackground>

    )
  }
}
export default ExportView;
//http://blog.arjun.io/react-native/mobile/cross-platform/2016/04/01/handling-the-keyboard-in-react-native.html
