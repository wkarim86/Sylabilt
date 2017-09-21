import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles/signup';
import textStyles from '../styles/text';

class UserSignup extends Component {
  constructor(props){
    super(props);
    /*  
      do your logic here e.g. check user logged in sesison etc
    */
  }
  
  //Render screen components
  render() {
    return (
      <Container>
       <Image source={require('../image/registerbg.png')} style={styles.signupBg} />
         <Grid>
            <Row size={1} >             
            </Row>
            <Row size={5}>
              <View style={{ flexDirection : 'column', flex : 1}}>
                  <Text style={styles.registerTextStyle}>Register</Text>  
                  <Text style={styles.withLabel}>with ..</Text> 
                  <View style={styles.socialButtonGroup}>
                      <Button style={styles.socialButon} transparent>
                        <Image source={require('../image/facebook.png')} />
                      </Button>
                    <Button style={styles.socialButon} transparent >
                        <Image source={require('../image/twitter.png')} />
                      </Button>
                    
                     <Button style={styles.socialButon} transparent >
                        <Image source={require('../image/googleplus.png')} />
                      </Button>
                  </View>
                
                 <Text style={styles.orLabel}>or ..</Text> 
                
                <Grid style={{marginTop:50}}>
                 
                  <Col size={4}>
                    <Grid style={{flex:1}}>
                      <Row style={{backgroundColor:'#FF0000'}}>
                      <Col style={{ alignItems:'flex-end', paddingRight:10}}>
                        <Text style={styles.font17Italic}>Username</Text>
                        <Text style={styles.font17Italic}>Password</Text>
                      </Col>
                      <Col>
                        <TextInput placeholder="email" style={styles.inputField}></TextInput>
                        <TextInput placeholder="password" style={styles.inputField}></TextInput>
                      </Col>
                      </Row>
                      <Row style={{backgroundColor:'#F35555'}}>
                   
                      </Row>
                    </Grid>
                    
                  
                  </Col>
                  <Col size={1}>
                    <Text>Error  fields</Text>
                  </Col>
                  
                </Grid>
                
              </View>
                
            </Row>
          </Grid>
      </Container>
    );
  }
}

export default UserSignup;