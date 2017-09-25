import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, Toast} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles/signup';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Settings from '../config/settings';

class UserSignin extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <Container>
           <Image source={require('../image/registerbg.png')} style={styles.signupBg} />
          <Grid>
            <Row size={1}>
            </Row>
            <Row size={3} style={{justifyContent:'center', flexDirection : 'column'}}>
            <View style={styles.socialButtonGroupSignin}>

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

              <View style={{ flex:0.6, flexDirection: 'column'}}>

                <View style={styles.formControl}>
                  <Image source={require('../image/user_shape.png')} style={{width:20, height: 20, flex:0}} />
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput placeholder="handle" style={styles.inputField}></TextInput>

                </View>

                <View style={styles.formControl}>
                <Image source={require('../image/unlocked_padlock.png')} style={{width:20, height: 20, flex:0}} />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput placeholder="password" style={styles.inputField}></TextInput>

                </View>

                <View style={styles.formControlV}>
                  <Button style={styles.loginButton} onPress = {() => {alert('Hello world')}} transparent style={{alignSelf:'center'}}>
                      <Image source={require('../image/registerbutton.png')} style={{resizeMode:'contain'}}/>
                  </Button>
                  <Text style={styles.linkButtonBlack}>Reset Password</Text>
                </View>


              </View>


              <View style={{flex: 0, flexDirection:'row', paddingLeft : 20, paddingRight : 20, justifyContent : 'space-between'}}>
                <View style={{height : 1, backgroundColor : 'black', width : '33%'}} />
                <View style={{height : 1, backgroundColor : 'black', width : '33%'}} />
              </View>

              <View style={{flex: 0, flexDirection:'column', padding : 20, justifyContent : 'space-between'}}>
                <Text style={{textAlign:'center', width : '100%', padding:20}}>Create An Account </Text>
                <Button style={styles.loginButton} onPress = {() => {navigate("signup")}} transparent style={{alignSelf:'center'}}>
                    <Image source={require('../image/registerbutton.png')} style={{resizeMode:'contain'}}/>
                </Button>
              </View>


            </Row>
          </Grid>
        </Container>
    );
  }

}

export default UserSignin;
