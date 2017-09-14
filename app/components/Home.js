import React, { Component } from 'react';
import {  
  StyleSheet,
  Text
} from 'react-native';
import styles from '../styles/text';
export default class Home extends Component{
  render (){
    return (     
    <Text style={styles.textAlignCenter}>
      I am Home Component
    </Text>
      );
  }
}
