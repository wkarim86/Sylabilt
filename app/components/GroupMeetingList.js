import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import lang from '../strings/values_en';

class GroupMeetingList extends Component {
  constructor(props){
    super(props);

  }
  updateList = (newFriendList) =>{
    this.setState({friendList : newFriendList});
  }
  render(){
    var dataList = this.props.dataList;
    return(
      <List dataArray = {dataList}
      renderRow={data =>
        <ListItem key={data.id} icon button style={{backgroundColor:'transparent'}}>
          <Body style={{flex:1, paddingLeft:10}}>
            <Text style={textStyles.friendListItem}>{data.name}</Text>
          </Body>
          <Right>
            <Icon name="more" />
          </Right>
        </ListItem>
      }
      >
      </List>
    )
  }

}
export default GroupMeetingList;
