import React, { Component } from 'react';
import {Button, Text} from 'native-base';
class DatePicker extends Component{
 
  render(){
    return (
      <Button primary full><Text>{this.props.text}</Text></Button>
    );
  }
}
export default DatePicker;