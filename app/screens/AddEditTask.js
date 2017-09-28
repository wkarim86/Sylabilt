import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';

class AddEditTask extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
      <Topbar title="Add Task" navigateTo={navigate} />
      <ImageBackground source={require('../image/agendabg.png')} style={{width: '100%', height : '100%'}}>
      <Content>
        <View style={styles.boxCenter}>
          <Button transparent>
            <Image source={require('../image/confirm.png')} style={{width : 145, resizeMode :'contain'}} />
          </Button>
        </View>

        <List>
          <ListItem icon>
            <Body>
              <Text style={styles.textBig40}>Task Type</Text>
            </Body>
            <Right>
              <Text>Subtext</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text style={styles.textBig40}>Date</Text>
            </Body>
            <Right>
              <Text>Subtext</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text style={styles.textBig40}>Class</Text>
            </Body>
            <Right>
              <Text>Subtext</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text style={styles.textBig40}>Alert</Text>
            </Body>
            <Right>
              <Text>Subtext</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Body>
              <Text style={styles.textBig40}>Repeat</Text>
            </Body>
            <Right>
              <Text>Subtext</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>

        <View style={styles.textArea}>
          <TextInput maxLength={250} multiline={true} editable={true} placeholder = 'Task Notes : ' />
        </View>

      </Content>
      </ImageBackground>
      </Container>
    )
  }

}
export default AddEditTask;
