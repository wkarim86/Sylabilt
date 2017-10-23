import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, Toast} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Topbar from '../components/Topbar';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Config from '../config/settings';
import Http from '../lib/http';
import Loader from '../components/Loader';
import DropdownAlert from 'react-native-dropdownalert';
Global  = require('../lib/global');

class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.state = {isLoading : false, maskPassword : true};
  }

  render () {
    return (
      <Container>
      <Topbar title={"Change Password"} isSearchButton={false} {...this.props} isBack={true} />
      <ImageBackground source={require('../image/editprofilebg.png')} style={{width: '100%', height : '100%'}}>
      <Content>

      <View style={{paddingTop : 50}}>

      <View style={styles.formControlV}>
        <Text style={styles.inputLabel, textStyles.textLinkWhite17}>New Password</Text>
        <TextInput style={styles.inputFieldBigWhite} secureTextEntry={this.state.maskPassword} placeholder='Password must be 6 character long' onChangeText = { (value) => { this.setState({password : value})}} ></TextInput>
      </View>
      <View style={styles.formControlV}>
        <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Confirm Password</Text>
        <TextInput style={styles.inputFieldBigWhite} secureTextEntry={this.state.maskPassword} onChangeText = { (value) => { this.setState({confPassword : value})}} ></TextInput>
      </View>
      <View style={styles.formControlV}>
        <Button transparent style={styles.alignCenter} onPress = { () => { this._onSubmit() }}>
          <Image source={require('../image/confirmgreen.png')} />
        </Button>
      </View>

      <View style={{flex:2, flexDirection:'row'}}>
          <Button transparent onPress={()=>{ this.showPassword()}} style={{flex:1, paddingLeft:0, paddingRight:0}}>
            <Text style={styles.formHint}>Show Password</Text>
          </Button>
      </View>

      </View>

      <DropdownAlert ref={ref => this.alertDropdown = ref}/>


      </Content>
      </ImageBackground>
      </Container>
    );
  }

  showAlert(type, title, message) {
    console.log(this.alertDropdown);
    if(type == 'close'){
      this.alertDropdown.close();
    }else{
      this.alertDropdown.alertWithType(type, title, message);
    }
  }

  showPassword(){
    if(this.state.maskPassword){
      this.setState( {maskPassword: false})
    }else{
      this.setState( {maskPassword: true})
    }

  }


  _onSubmit = () => {

    if(this.state.password !== this.state.confPassword) {
      this.showAlert('error', 'Password ', 'Confirm password should match same as new password');
      return false;
    }

    if(this.state.password == '' || this.state.password.length < 6){
      this.showAlert('error', 'Password ', 'Password field should not be empty or less than 6 characters');
      return false;
    }


    this.setState({isLoading : true}); //enable loader overlay
    const url = Config.endPointLocal + Config.apis.updateProfile;
    const formData = {
      user_id : Global.userInfo.user_id,
      password : this.state.password,
    };
    Http.post(url, formData).then( (response) => {

      this.setState({isLoading : false});

      if(!response.data.error) {
        this.showAlert('success', 'Change Password', 'Your password has been updated successfully');
        this.props.navigation.navigate('editprofile');
      }else{
        this.showAlert('error', 'Error', response.data.data);
      }
      console.log(response.data);
    }).catch( (error) => {
      this.setState({isLoading : false});

      console.log(error);
    });
  }


}

export default ChangePassword;
