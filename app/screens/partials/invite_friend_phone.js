import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../../lib/utils';
import Server from '../../lib/http';
import Config from '../../config/settings';
import lang from '../../strings/values_en';
import styles from '../../styles';
import textStyles from '../../styles/text';

class InviteFriendByPhone extends Component {
  render(){
    return(
      <View style={{flex:1, height: '100%', marginTop:100}}>
      <View style={styles.formControl}>
        <Text style={[textStyles.labelWhiteItalic, {paddingRight:5}]}>Phone #</Text>
        <TextInput style={styles.inputFieldBigWhite} />
      </View>
      <View style={styles.formControlV,styles.alignCenter}>
        <Button transparent>
          <Image source={require('../../image/confirmgreen.png')} />
        </Button>
      </View>
      </View>
    )
  }
}
export default InviteFriendByPhone;
