import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View



} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import lang from '../strings/values_en';

class BookFilters extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <View style={{flex :0, flexDirection: 'row', justifyContent:'center'}}>
      {
        this.props.filterData.map((value, index)=>{
          return (<Button style={ styles.bookFilterButton } key={value.text} onPress={value.action}>
              <Text style={textStyles.bookFilterButtonText}>{value.text}</Text>
          </Button>);
        })
      }


      </View>
    )
  }
}
export default BookFilters;
