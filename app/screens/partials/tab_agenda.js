import React, { Component} from 'react';
import { View, Image, ImageBackground, Text, ScrollView} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../../strings/colors';
import style from '../../styles';
import textStyle from '../../styles/text';
import Utils from '../../lib/utils';
import Http from '../../lib/http';
import Config from '../../config/settings';
import Loader from '../../components/Loader';
import AgendaListView from '../../components/AgendaListView';

export default class TabAgenda extends Component{
  render () {
      const taskBg = {
          homework  : require('../image/homework.png'),
          test  : require('../image/test.png'),
          quiz  : require('../image/quiz.png'),
          misc  : require('../image/misc.png')
      }
    return (
      <View>

      <View>
      <Button transparent style={{alignSelf:'flex-end', marginRight:20, marginTop:20}}>
        <Image source={require('../../image/legendbutton.png')} style={{resizeMode:'contain', width:30}}/>
      </Button>
      </View>

      <ScrollView style={style.paddingAround}>
          <AgendaListView />
      </ScrollView>

      </View>

    )
  }
}
