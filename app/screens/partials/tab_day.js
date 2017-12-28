import React, { Component} from 'react';
import { View, Image, ImageBackground, Text, ScrollView, RefreshControl} from 'react-native';
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
import NotFound from '../../components/NotFound';

Global = require('../../lib/global');

export default class TabDay extends Component{
  constructor(props){
    super(props);
    this.state = {isLoading : false, notFound : false, refreshing : false};
  }
  render () {
    console.log("Day", Global.dataSource);
    return (
      <View style={{flex:1}}>
        <Loader show={this.state.isLoading} size="large"/>

        <View style={{position:'absolute', zIndex:10, right:10, top: 70}}>
        <Button transparent style={{alignSelf:'flex-end', marginRight:10, marginTop:20}} onPress={ ()=> { this.toggleView()}}>
          <Image source={require('../../image/clock.png')} style={{resizeMode:'contain', width:60}}/>
        </Button>
        </View>


      <View style={{flex:0.2, height: 50, marginTop:20}}>
        <Text style={[textStyle.dayLabel, {position: 'absolute', left:100, top:30}]}>Monday</Text>
        <Text style={textStyle.dateLabel}>28</Text>
      </View>



      </View>

    )
  }

  toggleView = () => {

  }

}
