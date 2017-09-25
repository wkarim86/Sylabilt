import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Button} from 'native-base';
import colors from '../strings/colors';
import styles from '../styles/text';
class ShareProfile extends Component {

  constructor(props){
    super(props);

  }

 shareProfile() {
   alert('share profile clicked');
 }

  render(){
    return (
      <Button style={{justifyContent:'center', flexDirection : 'column', alignSelf:'center'}} transparent onPress = { () => { this.shareProfile() } } >
        <Text style={styles.labelWhiteItalic}>Share Profile</Text>
        <Image source={require('../image/but.png')} />
      </Button>

    )
  }

}
export default ShareProfile;
