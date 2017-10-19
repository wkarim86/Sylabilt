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
var moment = require('moment');
const cards = [
    { type : 'homework', value : require('../image/card-blue.png')},
    { type : 'test', value  : require('../image/card-red.png')},
    { type : 'quiz',  value : require('../image/card-yellow.png')},
    { type : 'review', value : require('../image/card-orange.png')},
    { type : 'misc', value  : require('../image/card-purple.png')}
  ];

const monthName = ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov', 'Dec'];
const weekDay  = ['Sun','Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
const due = null;
class AgendaListView extends Component{


  constructor(props){
    super(props);
    console.log(this.props.data.options);
    if(this.props.data.options.length > 0) {
      due = new Date(this.props.data.options[0].option_values[0].end_date);
    }
  }

  render(){

    return(
      <View style={{paddingBottom: 50}}>
      <ImageBackground source={this._getCard(this.props.data.type)} style={{width: '100%', height: 300}}>
        <View style={{flex:1,flexDirection: 'row'}}>

          <View style={{flex:0.4, flexDirection:'column'}}>

            <View style={{marginTop : 50, paddingLeft:20}}>
              <Text style={textStyle.textDue}>Due:</Text>
              <Text style={textStyle.textDue}>{monthName[due.getMonth()]}</Text>
              <Text style={textStyle.textDate}>{due.getDate()}</Text>
              <Text style={textStyle.textWeekName}>{weekDay[due.getDay()]}</Text>
            </View>

            <View style={{paddingTop : 20}}>
              <Button transparent onPress={()=> {console.log('task type clicked')}}>
                <Text style={textStyle.labelWhiteItalic}>{ this.props.data.type.toUpperCase()}</Text>
              </Button>
            </View>

          </View>
          <View style={{flex:0.6, flexDirection: 'column', justifyContent:'center'}}>

              <Text style={textStyle.textClass} ellipsizeMode='tail' numberOfLines={1}>{this.props.data.taxonomy.class}</Text>
              <Text style={textStyle.taskDescription} ellipsizeMode='tail' numberOfLines={3}>{this.props.data.description}</Text>

          </View>

        </View>
      </ImageBackground>
      </View>
    )
  }

  _getCard(keyword) {
    let output = null;
    cards.forEach( (item, key) => {
      if(item.type == keyword){
        output = item.value;
      }
    })
    return output;
  }




}

export default AgendaListView;
