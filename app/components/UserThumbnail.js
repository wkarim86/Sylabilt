import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Left, Right, Button, Thumbnail} from 'native-base';
import colors from '../strings/colors';
import style from '../styles/userpic';
class UserThumbnail extends Component {

  constructor(props){
    super(props);

  }

  updatePicture(){
    alert('Update Picture clicked');
  }

  render(){
    return (
      <Button onPress={() => this.updatePicture() } transparent style={{justifyContent:'center', alignItems:'center', height : 'auto', flexDirection : 'column', flex : 0}} >
        <Thumbnail source={ (this.props.imageSource) ? { uri : this.props.imageSource} : require('../image/editprofileico.png') }/>
        <Text>Edit Picture</Text>
      </Button>

    )
  }

}
export default UserThumbnail;
