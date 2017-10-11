import React, { Component} from 'react';
import { View, Image, ImageBackground, Text, ScrollView,TouchableHighlight} from 'react-native';
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
              <Text style={textStyle.textDue}>Sep</Text>
              <Text style={textStyle.textDate}>13</Text>
              <Text style={textStyle.textWeekName}>Wednesday</Text>
            </View>

            <View style={{paddingTop : 20}}>
              <Button transparent onPress={()=> {console.log('task type clicked')}}>
                <Text style={textStyle.labelWhiteItalic}>{('homework').toUpperCase()}</Text>
              </Button>
            </View>

          </View>
          <View style={{flex:0.6, flexDirection: 'column', justifyContent:'center'}}>

              <Text style={textStyle.textClass}>Mathematics</Text>
              <Text style={textStyle.taskDescription} ellipsizeMode='tail' numberOfLines={3}>Task description goes here</Text>

          </View>

        </View>
      </ImageBackground>
      </View>
    )
  }

}

export default AgendaListView;
