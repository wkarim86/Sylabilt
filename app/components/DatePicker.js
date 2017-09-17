import React, { Component } from 'react';
import {Button, Text} from 'native-base';
class DatePicker extends Component{
 constructor(props){
   super(props);
   
 }
  render(){
    return (
      <Button primary full onPress={() => this.props.navigate("Home")}><Text>{this.props.text}</Text></Button>
    );
  }
}
export default DatePicker;