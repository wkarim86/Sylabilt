import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import lang from '../strings/values_en';

class SearchBox extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{ flex :1 , width: '100%', backgroundColor:colors.white, borderRadius: 50, flexDirection : 'row', paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight:15}}>
        <Icon name="search" style={{color: colors.black}}/>
        <TextInput placeholder={(this.props.placeholder) ? this.props.placeholder : 'Search'} style={{width : '90%', marginLeft: 10}} placeholderTextColor="black" onChangeText = { (text) => this.props.onChangeText(text)} onSubmitEditing={ this.props.onSubmitEditing } returnKeyType='search' />
      </View>
    )
  }

}
export default SearchBox;
