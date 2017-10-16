import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ActivityIndicator
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';

class Loader extends Component{
  constructor(props){
    super(props);
  }
  render(){
    
      {
        if(this.props.show) {
          return <View style={styles.loader}>
              <ActivityIndicator
                  animating={this.props.show}
                  size={this.props.size}
                  color="white"
               />
          </View>
        }else{
          return null;
        }
      }

  }
}
export default Loader;
