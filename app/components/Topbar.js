import React, { Component } from 'react';
import {Header, Left, Right, Body, Icon, Button, Text} from 'native-base';
import {Alert} from 'react-native';
import sidebarStyle from '../styles/sidebar';
import textStyle from '../styles/text';
import colors from '../strings/colors';
import Utils from '../lib/utils';
class Topbar extends Component {
constructor(props){
  super(props);

}


  render() {
    return (
      <Header style={sidebarStyle.header}
        androidStatusBarColor = {colors.headerColor}
        iosBarStyle = "light-content"
        hasTabs
        >
        <Left>
        <Button transparent onPress={()=>this.props.navigateTo("DrawerOpen")}>
              <Icon name='menu' style={{color: colors.black}}/>
            </Button>
        </Left>
          <Body style = {sidebarStyle.headerButtons}>
           <Text style={ {color : colors.white} }>
             {this.props.title}
            </Text>
        </Body>
        <Right>

        {Utils.renderIf(this.props.isSearchButton,
          <Button transparent>
            <Icon name="search" style={{color: colors.black}} />
          </Button>
          )}


        </Right>
      </Header>
    );

  }
}

export default Topbar;
