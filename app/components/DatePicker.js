import React, { Component } from 'react';
import {Picker,Item as FormItem, Form} from 'native-base';

const Item = Picker.Item;
class DatePicker extends Component{
 constructor(props){
   super(props);


 }

 renderPItem() {
   var output = '';
   const date = new Date();
   const months = ['Jan', 'Feb', 'MNar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
   const years = date.getFullYear() - 100;
   for(var i = 0; i < years; i++){
     output += (date.getFullYear() - i )  + '\n';
   }
   return output;
 }

  render(){

    return (
      <Form>
      <Picker
        mode="dropdown"
        selectedValue="0"
        >
        <Item label="Month" value="0" />
        <Item label="Jan" value"1" />
      </Picker>
      </Form>
    );
  }
}
export default DatePicker;
