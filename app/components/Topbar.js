import React, { Component } from 'react';
import {Header, Left, Right, Body, Text, Icon, Button} from 'native-base';

class Topbar extends Component {
constructor(props){
  super(props);
  console.log(props);
}
  render() {
    return ( 
      <Header>
        <Left>
        <Button transparent onPress={()=>this.props.navigateTo("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
        </Left>
          <Body>
          <Text>
            {this.props.title}
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
    
  }
}
          
export default Topbar;