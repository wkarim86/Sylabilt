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
  constructor(props){
    super(props);

  }
  render () {
      const cards = {
          homework  : require('../../image/card-blue.png'),
          test  : require('../../image/card-red.png'),
          quiz  : require('../../image/card-yellow.png'),
          review : require('../../image/card-orange.png'),
          misc  : require('../../image/card-purple.png')
      }
    return (
      <View>

      <View>
      <Button transparent style={{alignSelf:'flex-end', marginRight:10, marginTop:20}}>
        <Image source={require('../../image/legendbutton.png')} style={{resizeMode:'contain', width:30}}/>
      </Button>
      </View>

      <View style={{flex:0.2, height: 50}}>
        <Text style={textStyle.whatsnext}>What's Next?</Text>
      </View>

      <ScrollView style={style.paddingAround}>
          <AgendaListView card={cards.homework}/>
      </ScrollView>

      </View>

    )
  }
}
