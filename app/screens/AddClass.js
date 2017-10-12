import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  SegmentedControlIOS

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyles from '../styles/text';
import PickerView from '../components/PickerView';
import DateTimePicker from 'react-native-datepicker';
class AddClass extends Component{
  constructor(props){
    super(props);
    this.state = {daySelectedIndex : 0};
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title={lang.text_add_class} {...this.props}  />
      <ImageBackground source={require('../image/Groupmeetingbg.png')} style={{width : '100%', height:'100%'}}>
        <Grid>
          <Row size={0.4} style={{flexDirection:'column'}}>
          <List style={{marginLeft:0, paddingLeft:0, backgroundColor:'transparent'}}>
            <ListItem icon style={styles.listItemTransparent}>
            <Body>
              <Text style={textStyles.textWhiteBig20}>Upload Syllabus</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Body>
              <TextInput style={styles.inputFieldWhite} placeholder="Title" placeholderTextColor="white"/>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Left>
              <Text style={textStyles.labelWhite}>Day</Text>
            </Left>
            <Body>
            <SegmentedControlIOS
            tintColor='#55C77D'
              values={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
              selectedIndex={this.state.daySelectedIndex}
              onChange={(event) => {
                this.setState({daySelectedIndex: event.nativeEvent.selectedSegmentIndex});
              }}
              />
            </Body>
            <Right>

            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Body>
              <Text style={textStyles.labelWhite}>Time</Text>
            </Body>
            <Right>
              <Text style={textStyles.labelWhite}>None</Text>
              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            </List>
          </Row>
          <Row size={0.4} style={{flexDirection:'column'}}>

          </Row>
          <Row size={0.2} style={{justifyContent:'space-between', paddingLeft:20, paddingRight:20}}>
            <TouchableHighlight onPress={() => navigate('addtask')}>
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
export default AddClass;
