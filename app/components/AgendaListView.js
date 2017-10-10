import React, { Component} from 'react';
import { View, Image, ImageBackground, Text, ScrollView} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import style from '../styles';
import textStyle from '../styles/text';
import Utils from '../lib/utils';
import Http from '../lib/http';
import Config from '../config/settings';
import Loader from '../components/Loader';

class AgendaListView extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={{paddingBottom: 50}}>
      <ImageBackground source={this.props.card} style={{width: '100%', height: 300}}>
        <View style={{flex:1,flexDirection: 'row'}}>

          <View style={{flex:0.4, flexDirection:'column'}}>

            <View style={{marginTop : 50, paddingLeft:20}}>
              <Text style={textStyle.textDue}>Due:</Text>
              <Text style={textStyle.textDue}>Oct</Text>
              <Text style={textStyle.textDate}>24</Text>
              <Text style={textStyle.textWeekName}>Tuesday</Text>
            </View>

          </View>
          <View style={{flex:0.6}}></View>

        </View>
      </ImageBackground>
      </View>
    )
  }

}

export default AgendaListView;
