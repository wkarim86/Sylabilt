import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import lang from '../strings/values_en';

class BookAffiliates extends Component {
  constructor(props){
    super(props);
  }

render(){
  return(
    <ScrollView>
      <List>
        <ListItem style={styles.bookListItem}>
          <Left>
              <Image source={{ uri : 'https://upload.wikimedia.org/wikipedia/en/e/e3/Abebooks-logo.png'}} style={{resizeMode : 'cover', width : 90}} />
          </Left>
          <Body style={{flex :1, flexDirection : 'column'}}>

            <Text style={textStyles.bookListItemText}>Type : Rent</Text>
            <Text style={textStyles.bookListItemText}>Cost : $88.99</Text>
            <Text style={textStyles.bookListItemText}>S/H : 7.99</Text>

          </Body>
          <Right>
            <Text style={textStyles.bookListItemPrice}>Total $: 92.99</Text>
          </Right>
        </ListItem>
      </List>
    </ScrollView>
  )
}

}
export default BookAffiliates;
