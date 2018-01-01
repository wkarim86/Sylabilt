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
import Config from '../config/settings';
class BookAffiliateList extends Component {
  constructor(props){
    super(props);
  }

render(){
  const data =  this.props.data;
  console.log('BookAffiliateList', data[0]);
  return(
      <List dataArray={data[0].items}
        renderRow={(item) =>
          <ListItem style={styles.bookListItem} >
            <Left>
                <Image source={Config.chegg.logo} style={{resizeMode : 'cover', width : 90, height: 20}} />
            </Left>
            <Body style={{flex :1, flexDirection : 'column'}}>

              <Text style={textStyles.bookListItemText}>Type : {item.desc}</Text>
              <Text style={textStyles.bookListItemText}>Cost : {item.price}</Text>
              <Text style={textStyles.bookListItemText}>S/H : {this.props.data[0].shipping}</Text>

            </Body>
            <Right>
              <Text style={textStyles.bookListItemPrice}>Total { Math.round(parseInt(item.price) + parseInt(this.props.data[0].shipping))}</Text>
            </Right>
          </ListItem>

        }
        >
    </List>
  )
}

getUniquiKey ( id ){
  return id.split("|")[1];
}

renderListByType (type) {

}

}
export default BookAffiliateList;
