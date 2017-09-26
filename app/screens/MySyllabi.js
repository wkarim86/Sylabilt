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
import styles from '../styles/signup';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Settings from '../config/settings';
import Topbar from '../components/Topbar';

class MySyllabi extends Component {
  constructor(props){
    super(props);
    this.state = {isNewSyllabi : false}
  }

  editAction(){
    alert('I am edit button action');
  }
  render(){
    const {navigate} = this.props.navigation;
    var items = ['Accounting A14', 'Earth Science', ' Chem 183', 'Maths101'];
    var rowbg = require('../image/button.png');
    var item  = items.map(function(name, index){
          return <Row key={index} >
                <Button transparent style={{flex:1, height : 54, justifyContent : 'center', marginTop : 10, marginBottom : 10}}>
                  <Image source={rowbg} style={{position:'absolute'}} />
                    <Text style={textStyles.mysyllabiButton}>{name}</Text>
                </Button>
                </Row>;
    });
    return(
      <Container>
        <Topbar title="MySyllabi" navigateTo={navigate} isEditButton={true} editBtnEventListner={ this.editAction }/>
        <ImageBackground source={require('../image/syllabusBg.png')} style={{width: '100%', height : '100%'}}>
        <Content style={{padding:40}}>
              <Grid>
                  {item}
              </Grid>
        </Content>
      </ImageBackground>

      </Container>

    );
  }

}

export default MySyllabi;
