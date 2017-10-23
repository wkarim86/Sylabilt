import React, { Component} from 'react';
import { View, Image, Text} from 'react-native';
import {Container, Body, Content, Header, Button} from  'native-base';
import style from '../styles';
import textStyle from '../styles/text';
import Http from '../lib/http';

class AdBanner extends Component {
  render() {
    return (
      <View style={style.adsBanner}>
          <Text style={{textAlign: 'center', width: '100%'}}>Ad Goes here</Text>
      </View>
    )
  }
}

export default AdBanner;
