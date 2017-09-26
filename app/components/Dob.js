import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import colors from '../strings/colors';

class Dob extends Component{
 constructor(props){
   super(props);
   const date = new Date();
   this.state = { date : date };
 }

 renderPItem() {
   var output = '';

   const months = ['Jan', 'Feb', 'MNar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
   const years = date.getFullYear() - 100;
   for(var i = 0; i < years; i++){
     output += (date.getFullYear() - i )  + '\n';
   }
   return output;
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
           onDateChange={(date) => {this.setState({date : date})}}
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
