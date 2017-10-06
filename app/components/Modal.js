import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ActivityIndicator,
  Modal,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyle from '../styles/text';

class UIModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(


          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
           </View>
          </Modal>


    )
  }
}

export default UIModal;
