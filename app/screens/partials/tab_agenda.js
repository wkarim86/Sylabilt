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
Global = require('../../lib/global');

export default class TabAgenda extends Component{
  constructor(props){
    super(props);
    this._loadPost(0);
  }


  _loadPost = (offset : int) => {
    const limit = 10; //10 posts per request
    var url = Config.endPointLocal + Config.apis.post + Global.userInfo.id + '/' + limit;
    console.log("========== URL: " + url);
    Http.get(url, {offset : offset})
    .then( (responseJson) => {
      console.log('Response');
      console.log(responseJson.data);
    })
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
        <Text style={textStyle.whatsnext}>Whats Next?</Text>
      </View>

      <ScrollView style={style.paddingAround}>
        <List
          dataArray={null}
          renderRow={(data) => <AgendaListView card={cards.homework}/>}
        >

        </List>

      </ScrollView>

      </View>

    )
  }
}
