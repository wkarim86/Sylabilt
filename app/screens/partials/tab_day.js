import React, { Component} from 'react';
import {Container, Content, Body, Left, Right, Text} from 'native-base';

export default class TabDay extends Component{
  render () {
    console.log("Day", Global.dataSource);
    return (
        <Content padder>
          <Text>Day Tab</Text>
        </Content>

    )
  }
}
