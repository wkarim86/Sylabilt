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
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Settings from '../config/settings';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.state  = { username : null, password : null};
  }

  doLogin() {
    if(this.state.username == "test123" && this.state.password == "123456"){
      this.props.navigation.navigate("home");
    }else{
      alert("Invalid login. Try again");
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <Container>
           <Image source={require('../image/loginbg.png')} style={styles.signupBg} />
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
                  <View style={{flex:0.2, alignItems:'flex-end'}}>
                    <Image source={require('../image/username.png')} style={{width:20, height: 20, flex:0}} />
                  </View>
                    <View style={{flex:0.8, flexDirection:'row'}}>
                      <Text style={styles.inputLabel}>Username</Text>
                      <TextInput placeholder="handle" style={styles.inputField} onChangeText={(text) => this.setState({username:text})}></TextInput>
                    </View>
                </View>

                <View style={styles.formControl}>
                    <View style={{flex:0.2, alignItems:'flex-end'}}>
                      <Image source={require('../image/password.png')} style={{width:20, height: 20, flex:0}} />
                    </View>
                    <View style={{flex:0.8, flexDirection:'row'}}>
                      <Text style={styles.inputLabel}>Password</Text>
                      <TextInput placeholder="password" style={styles.inputField} secureTextEntry={true} onChangeText={(text) => this.setState({password:text})}></TextInput>
                    </View>

                </View>

                <View style={styles.formControlV}>
                  <Button style={styles.loginButton} onPress = {() => this.doLogin() } transparent style={{alignSelf:'center'}}>
                      <Image source={require('../image/login.png')} style={{resizeMode:'contain'}}/>
                  </Button>
                  <Button transparent style={styles.alignCenter} onPress={() => {this.props.navigation.navigate("forgotpassword")}}>
                    <Text style={styles.linkButtonBlack}>Reset Password</Text>
                  </Button>
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
