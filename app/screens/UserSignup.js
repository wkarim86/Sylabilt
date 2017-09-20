import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles/signup';

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
              <Text>Balnk</Text>
            </Row>
            <Row size={4}>
              <Text style={{ textAlign : 'center', width:'100%', fontSize:30, fontWeight: 'bold'}}>Register</Text>
            </Row>
          </Grid>
      </Container>
    );
  }
}

export default UserSignup;