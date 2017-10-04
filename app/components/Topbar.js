import React, { Component } from 'react';
import {Header, Left, Right, Body, Icon, Button, Text} from 'native-base';
import {Alert} from 'react-native';
import sidebarStyle from '../styles/sidebar';
import textStyle from '../styles/text';
import colors from '../strings/colors';
import Utils from '../lib/utils';
import {NavigationActions} from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
class Topbar extends Component {

constructor(props){
  super(props);
  console.log(props);

}


  render() {

    return (
      <Header style={sidebarStyle.header}
        androidStatusBarColor = {colors.headerColor}
        iosBarStyle = "light-content"
        hasTabs
        >
        <Left style={{flex :0.5}}>

        {Utils.renderIf(this.props.isBackButton,
          <Button transparent onPress={ () => this.props.navigation.navigate(this.props.backKey) }>
            <Icon name="ios-arrow-back" style={{color: colors.black}} />
          </Button>
          )}

          {Utils.renderIf(!this.props.isBackButton,
            <Button transparent onPress={()=>this.props.navigateTo("DrawerOpen")}>
                  <Icon name='menu' style={{color: colors.black}}/>
                </Button>

            )}


        </Left>
          <Body style = {sidebarStyle.headerButtons}>
           <Text style={ sidebarStyle.headerTitle }>
             {this.props.title}
            </Text>
        </Body>
        <Right style={{flex: 0.6}}>

        {Utils.renderIf(this.props.isSearchButton,
          <Button transparent onPress={ this.props.searchBtnEventListner }>
            <Icon name="search" style={{color: colors.black}} />
          </Button>
          )}

          {Utils.renderIf(this.props.isEditButton,
            <Button transparent onPress={ this.props.editBtnEventListner } >
              <FontAwesomeIcon name="edit" style={{color: colors.black, fontSize:20}} />

            </Button>
            )}

            {Utils.renderIf(this.props.isAddButton,
              <Button transparent onPress={ this.props.addBtnEventListner } >
                <Icon name="add" style={{color: colors.black}} />
              </Button>
              )}

        </Right>
      </Header>
    );

  }
}

export default Topbar;
