import React, { Component} from 'react';
import { View, Image, ImageBackground, Text} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button} from  'native-base';
import colors from '../strings/colors';
import style from '../styles';
import textStyle from '../styles/text';
const defaultText = "No data found";
class NotFound extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Text style={textStyle.textNotFound}>{(this.props.text) ? this.props.text : defaultText}</Text>
      </View>
    )
  }
}
export default NotFound;
