import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import colors from '../strings/colors';

class Dob extends Component{
 constructor(props){
   super(props);
   const d = new Date(this.props.date);
   this.state = { date : d };
   
 }

 _onValueChange = (value) => {
   this.setState({date: value});
   this.props.onDateChange(value);
 }


  render(){

    return (

        <DatePicker
          style={{backgroundColor :'rgba(219,219,219,0.3)', borderRadius: 5, padding:5, width:200}}
           date={this.state.date}
           mode="date"
           format="YYYY-MM-DD"
           confirmBtnText="Done"
           cancelBtnText="Cancel"
           iconSource={require('../image/down_arrow.png')}
           onDateChange={(date) => {this._onValueChange(date)}}
           customStyles={
             {
               dateInput : {
                 borderWidth : 0,
               },
               dateText : {
                 color : colors.white
               }
             }
           }
         />
      )

  }
}
export default Dob;
