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


                 {/* <Grid style={{marginTop:50}}>

                   <Col size={4}>
                     <Grid style={{flex:1}}>
                       <Row>
                       <Col style={{ alignItems:'flex-end', paddingRight:10}}>
                         <Text style={textStyles.font17Italic}>Username</Text>
                       </Col>
                       <Col>
                         <TextInput placeholder="email" style={styles.inputField}></TextInput>
                       </Col>
                       </Row>
                     </Grid>

                     <Grid style={{flex:1}}>
                       <Row>
                       <Col style={{ alignItems:'flex-end', paddingRight:10}}>
                         <Text style={textStyles.font17Italic}>Password</Text>
                       </Col>
                       <Col>
                         <TextInput placeholder="email" style={styles.inputField}></TextInput>
                       </Col>
                       </Row>
                     </Grid>


                   </Col>
                   <Col size={1}>
                     <Text>Error  fields</Text>
                   </Col>

                 </Grid> */}

                <View style={{ flex:1, flexDirection: 'column', marginTop:50}}>

                  <View style={{flex:0, flexDirection :'row', alignItems:'center', paddingLeft:10, paddingRight:10, marginBottom:10}}>
                      <Text style={{flex:1.5, backgroundColor: 'grey'}}>Username</Text>
                      <TextInput placeholder="email" style={{flex:3, marginLeft:10, borderBottomWidth:1}}></TextInput>
                      <View style={{flex:2, flexDirection:'row'}}>

                          <Image source={require('../image/checkmark.png')} style={{flex:0.5,resizeMode :'contain', width:20, height:18, padding:5, justifyContent:'center', alignItems:'center'}} />
                          <Text style={{flexWrap: 'wrap', flex:1}}>Handle Available</Text>
                      </View>
                  </View>

                  <View style={{flex:0, flexDirection :'row', alignItems:'center', paddingLeft:10, paddingRight:10, marginBottom:10}}>
                      <Text style={{flex:1.5, backgroundColor: 'grey'}}>Password</Text>
                      <TextInput placeholder="password" style={{flex:3, marginLeft:10, borderBottomWidth:1}}></TextInput>
                      <View style={{flex:2, flexDirection:'row'}}>

                          <Image source={require('../image/checkmark.png')} style={{flex:0.5,resizeMode :'contain', width:20, height:18, padding:5, justifyContent:'center', alignItems:'center'}} />
                          <Text style={{flexWrap: 'wrap', flex:1}}>Show Password</Text>
                      </View>
                  </View>


                </View> 


              </View>

            </Row>
          </Grid>
      </Container>
    );
  }
}

export default UserSignup;
