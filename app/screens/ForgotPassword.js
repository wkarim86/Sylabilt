import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Http from '../lib/http';
import Settings from '../config/settings';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyles from '../styles/text';
import Loader from '../components/Loader';

class ForgotPassword extends Component{
  constructor(props){
    super(props);
    this.state = { isLoading: false};

  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <Container>
        <Loader show={this.state.isLoading} size="large"/>
      <ImageBackground source={require('../image/SilverBG.png')} style={{width : '100%', height:'100%'}}>
          <Grid>
            <Row size={0.6} style={{justifyContent: 'center', alignItems: 'center', flexDirection : 'column', padding:40}}>
              <Image source={require('../image/forgotpasswordicon.png')} style={{resizeMode :"contain"}} />
              <Text style={[textStyles.textBigItalic30, {marginTop: 20, marginBottom : 20}]}>Forgot Password ? </Text>
              <Text style={[textStyles.textBigItalic20,{textAlign: 'center'}]}>We just need your registered Email to send you your password reset instructions.</Text>
            </Row>
            <Row size={0.4} style={{flexDirection:'column', padding:20}}>
              <Text style={textStyles.textGrey30}>Email</Text>
              <TextInput style={styles.inputFieldForgotEmail}  onSubmitEditing={ () => { this.doPasswordReset() }} autoFocus={true} keyboardType={'email-address'} onChangeText={ (value) => { this.setState({email : value})}} />
              <Button transparent style={{alignSelf : 'center', marginTop: 40}} onPress = { () => { this.doPasswordReset() }}>
                <Image source={require('../image/resetpassword.png')} />
              </Button>
              <Button transparent style={{alignSelf : 'center', marginTop: 20}} onPress={() => this.props.navigation.goBack()}>
                <Text style={textStyles.textGrey30}>  Back </Text>
              </Button>
            </Row>

          </Grid>
      </ImageBackground>
      </Container>
    )
  }

  doPasswordReset = () => {
    let url = Settings.endPointLocal + Settings.endPointLocal + Settings.apis.reset_password;
    let postParam = { email : this.state.email };
    Http.post(url, {postParam}).then( this._callback )
    .catch( this._errorCallback);
  }
  _callback = (response) => {
    console.log('Response:',response);
  }
  _errorCallback = ( error ) => {
    console.log('Response Error:', error)
  }
}
export default ForgotPassword;
