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
      <View>
      <ImageBackground source={this.props.taskBgImage} style={{width: '100%', height: 300}}>
        
      </ImageBackground>
      </View>
    )
  }

}

export default AgendaListView;
