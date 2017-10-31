import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  Switch

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment, Separator} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyles from '../styles/text';
import colors from '../strings/colors';
import CheckBox from '../components/CheckBox';
//import Checkbox from 'react-native-check-box';


class Settings extends Component {
  constructor(props){
    super(props);
    this.state = { localSounds : { "homework": false, "test" : false, "quiz" : false, "review" : false, "misc" : false},
                    pushSounds : { "homework": false, "test" : false, "quiz" : false, "review" : false, "misc" : false}
                  };

  }

  toggleCheckbox(trigger){
    if(trigger){
      return false;
    }else{
      return true;
    }
  }


    render(){
      const {navigate} = this.props.navigation;
      console.log('states', this.state.localSounds);
      return(
        <Container>
        <Topbar title={lang.text_settings} {...this.props}/>
        <ImageBackground source={require('../image/settingsbg.png')} style={{width:'100%', height: '100%'}}>
        <Content>
            <View size={0.2} style={{justifyContent:'flex-end'}}>
                <Button transparent style={{alignSelf: 'flex-end'}}>
                  <Image source={require('../image/confirm.png')} style={{width:140, resizeMode:'contain'}} />
                </Button>
            </View>
            <View size={0.8} style={[styles.paddingAround, {flexDirection:'column'}]}>

              <List>
              <ListItem itemDivider style={{backgroundColor: 'transparent'}}>
                <Text style={[textStyles.textWhiteBig30,{flex:1}]}>Sound Notifications</Text>
              </ListItem>
                <ListItem  button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelHome}>Home</Text>
                  </Body>
                  <Right style={{flex:0.3}}>

                  <CheckBox value={this.state.localSounds.homework} onToggle={(value) => this.updateState('local',{"homework" : value})} style={{borderColor: colors.homework}} />


                  </Right>
                </ListItem>
                <ListItem style={[styles.noBorder, styles.transparent]} button>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelTest}>Test</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.localSounds.test} onToggle={(value) => this.updateState('local',{"test" : value}) } style={{borderColor: colors.test}} />

                  </Right>
                </ListItem>
                <ListItem  button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelQuiz}>Quiz</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
<CheckBox value={this.state.localSounds.quiz} onToggle={(value) => this.updateState('local',{"quiz" : value}) } style={{borderColor: colors.quiz}} />
                  </Right>
                </ListItem>
                <ListItem  button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelReview}>Review</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
<CheckBox value={this.state.localSounds.review} onToggle={(value) => this.updateState('local',{"review" : value}) } style={{borderColor: colors.review}} />
                  </Right>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelMisc}>Misc</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
<CheckBox value={this.state.localSounds.misc} onToggle={(value) => this.updateState('local',{"misc" : value}) } style={{borderColor: colors.misc}} />

                  </Right>
                </ListItem>
                <ListItem itemDivider style={{backgroundColor : 'transparent'}}>
                  <Text style={[textStyles.textWhiteBig30,{flex:1}]}>Push Notifications</Text>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelHome}>Home</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.pushSounds.homework} onToggle={(value) => this.updateState('push',{"homework" : value})} style={{borderColor: colors.homework}} />


                  </Right>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelTest}>Test</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.pushSounds.test} onToggle={(value) => this.updateState('push',{"test" : value})} style={{borderColor: colors.test}} />

                  </Right>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelQuiz}>Quiz</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.pushSounds.quiz} onToggle={(value) => this.updateState('push',{"quiz" : value})} style={{borderColor: colors.quiz}} />

                  </Right>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelReview}>Review</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.pushSounds.review} onToggle={(value) => this.updateState('push',{"review" : value})} style={{borderColor: colors.review}} />


                  </Right>
                </ListItem>
                <ListItem button style={[styles.noBorder, styles.transparent]}>
                  <Body style={{flex:1, justifyContent: 'center', alignItems : 'center'}}>
                    <Text style={textStyles.labelMisc}>Misc</Text>
                  </Body>
                  <Right style={{flex:0.3}}>
                  <CheckBox value={this.state.pushSounds.misc} onToggle={(value) => this.updateState('push',{"misc" : value})} style={{borderColor: colors.misc}} />


                  </Right>
                </ListItem>
                </List>
            </View>

            <View style={{height:50}} />

        </Content>
        </ImageBackground>
        </Container>

      )
  }


updateState (key, value){
  if( key == 'local'){
    let tempObject  = Object.assign({}, this.state.localSounds, value);
    this.setState({localSounds: tempObject});
  }else{
    let tempPushObj  = Object.assign({}, this.state.pushSounds, value);
    this.setState({pushSounds: tempPushObj});
  }
}


}

export default Settings;
