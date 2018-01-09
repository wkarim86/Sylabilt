import React, { Component} from 'react';
import {Container, Content, Body, Left, Right, Text} from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { View } from 'react-native';
export default class TabMonth extends Component{

  render () {
    const date  = new Date();
    return (
        <Content padder>
        <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
      
    />
        </Content>

    )
  }
}
