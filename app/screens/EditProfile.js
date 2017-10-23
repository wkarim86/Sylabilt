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
import UserThumbnail from '../components/UserThumbnail';
import ShareProfileButton from '../components/ShareProfileButton';
import Dob from '../components/Dob';
import Loader from '../components/Loader';
import DropdownAlert from 'react-native-dropdownalert';
import Db from '../config/db';
var db = new Db();
Global  = require('../lib/global');


class EditProfile extends Component {
  constructor(props){
    super(props);
    console.log('User Data:', Global.userInfo);
    this.state =  {
      username : Global.userInfo.username,
      dob : Global.userInfo.dob,
      email : Global.userInfo.email,
      name: Global.userInfo.name,
      phone: Global.userInfo.phone,
      school : Global.userInfo.school,
      isLoading : false};

  }

  render(){
    const {navigate} = this.props.navigation;
    return(

      <Container>
      <Loader show={this.state.isLoading} size="large"/>
      <Topbar title={"Edit Profile"} isSearchButton={false} {...this.props} />
      <ImageBackground source={require('../image/editprofilebg.png')} style={{width: '100%', height : '100%'}}>
      <Content>
        <View style={{justifyContent: 'space-between', flexDirection :'row', padding : 20}}>
        <UserThumbnail  />
        <ShareProfileButton />
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Your Name</Text>
          <TextInput style={styles.inputFieldBigWhite} value={this.state.name} onChangeText = { (value) => { this.setState({name : value})}} ></TextInput>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Handle</Text>
          <TextInput style={styles.inputFieldBigWhite} value={this.state.username} onChangeText = { (value) => { this.setState({username : value})}} ></TextInput>

        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>E-mail</Text>
          <TextInput style={styles.inputFieldBigWhite} value={this.state.email} onChangeText = { (value) => { this.setState({email : value })}} ></TextInput>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>DOB</Text>
          <Dob date={this.state.dob} onDateChange= { (date) => {this._onDateChange(date)}}/>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>School</Text>
          <TextInput style={styles.inputFieldBigWhite} value={this.state.school} onChangeText = { (value) => { this.setState({school : value})}} ></TextInput>
        </View>

        <View style={styles.formControl}>
          <Button transparent style={styles.alignCenter}><Text style={textStyles.textLinkWhite17}>Adjust Subscription</Text></Button>
          <Button transparent style={{flex:1, justifyContent:'center', alignSelf : 'center'}} onPress = { ()=> { this.props.navigation.navigate('changepassword', {prevRoute : 'editprofile' })}}>
            <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Change Password</Text>
            </Button>
        </View>
        <View style={styles.formControlV}>
          <Button transparent style={styles.alignCenter} onPress = { () => { this._onSubmit() }}>
            <Image source={require('../image/confirmgreen.png')} />
          </Button>
        </View>

        <DropdownAlert ref={ref => this.alertDropdown = ref}/>

      </Content>
      </ImageBackground>

      </Container>

    );
  }


_onDateChange = (value) => {
  this.setState({dob : value});
}

_onSubmit = () => {
  this.setState({isLoading : true}); //enable loader overlay
  const url = Config.endPointLocal + Config.apis.updateProfile;
  const formData = {
    user_id : Global.userInfo.user_id,
    name : this.state.name,
    email : this.state.email,
    username: this.state.username,
    school : this.state.school,
    dob : this.state.dob,
    phone : this.state.phone
  };
  Http.post(url, formData).then( (response) => {
    this.setState({isLoading : false});
    this.showAlert('success', 'Profile Update', 'Your profile has been updated successfully');

    db.insert({ schema : Db.UserSchema.name,
      values :[
          {
            id : 1,
            user_id : formData.user_id,
            name : formData.name,
            username : formData.username,
            email: formData.email,
            dob : formData.dob,
            school : formData.school,
            phone : formData.phone
          }
        ],
        isUpdate : true
      }
    );


    console.log(response.data);
  }).catch( (error) => {
    this.setState({isLoading : false});
    console.log(error);
  });
}

 showAlert(type, title, message) {
   console.log(this.alertDropdown);
   if(type == 'close'){
     this.alertDropdown.close();
   }else{
     this.alertDropdown.alertWithType(type, title, message);
   }
 }






}
export default EditProfile;
