import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyles from '../styles/text';


class AddGroupMeeting extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title={lang.text_add_meeting} {...this.props}  />
      <ImageBackground source={require('../image/Groupmeetingbg.png')} style={{width : '100%', height:'100%'}}>
        <Grid>
          <Row size={0.4} style={{flexDirection:'column'}}>
          <Text style={textStyles.labelGreenItalic}>Share Via </Text>
            <View style={{flex:1,  paddingTop:40, paddingBottom:40, paddingLeft:20, paddingRight:20}}>
              <TextInput style={[styles.inputFieldWhite2,{alignSelf:'center', width:'80%', marginBottom:20}]} placeholder="Handle, Email" placeholderTextColor="white"/>
              <Text style={textStyles.labelWhiteItalic}>OR</Text>
              <TextInput style={[styles.inputFieldWhite2,{alignSelf:'center', width:'80%',marginTop:20}]} placeholder="Phone #" placeholderTextColor="white"/>
            </View>
          </Row>
          <Row size={0.4} style={{flexDirection:'column'}}>
          <Text style={textStyles.labelGreenItalic}>Meeting Details </Text>
            <List style={{marginLeft:0, paddingLeft:0, backgroundColor:'transparent'}}>
              <ListItem icon style={styles.listItemTransparent}>
              <Body>
                <Text style={textStyles.textWhiteBig20}>Class</Text>
              </Body>
              <Right>
                <Text style={textStyles.labelWhite}>None</Text>
                <Icon name="arrow-forward" />
              </Right>
              </ListItem>
              <ListItem icon style={styles.listItemTransparent}>
              <Body>
                <Text style={textStyles.textWhiteBig20}>Time</Text>
              </Body>
              <Right>
                <Text style={textStyles.labelWhite}>None</Text>
                <Icon name="arrow-forward" />
              </Right>
              </ListItem>
              <ListItem icon style={styles.listItemTransparent}>
              <Body>
                <Text style={textStyles.textWhiteBig20}>Date</Text>
              </Body>
              <Right>
                <Text style={textStyles.labelWhite}>None</Text>
                <Icon name="arrow-forward" />
              </Right>
              </ListItem>
              <ListItem icon style={styles.listItemTransparent}>
              <Body>
                <Text style={textStyles.textWhiteBig20}>Repeat</Text>
              </Body>
              <Right>
                <Text style={textStyles.labelWhite}>None</Text>
                <Icon name="arrow-forward" />
              </Right>
              </ListItem>
            </List>

          </Row>
          <Row size={0.2} style={{justifyContent:'space-between', paddingLeft:20, paddingRight:20}}>
            <TouchableHighlight>
              <Text style={textStyles.textLinkWhite17}>{lang.text_cancel}</Text>
              </TouchableHighlight>

                <Button transparent style={{flexDirection:'column'}}>
                  <Image source={require('../image/but.png')} />
                  <Text style={textStyles.labelGreenItalic}>Add</Text>
                </Button>

          </Row>
        </Grid>
      </ImageBackground>
      </Container>
    )
  }

}
export default AddGroupMeeting;
