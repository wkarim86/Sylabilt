import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, Toast} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Settings from '../config/settings';
import Http from '../lib/http';
import Loader from '../components/Loader';
import Db from '../config/db';
var db = new Db();
Global = require('../lib/global');
const uuid = require('uuid/v1');

var inputFields = {
  username : null,
  password : null,
  email    : null
}

class UserSignup extends Component {

  constructor(props){
    super(props);
    this.state = {maskPassword : true, isLoading : false, handleCheck : null, emailCheck : null};
    
  }

  //Render screen components
  render() {
    const {navigate} = this.props.navigation;
    let checkMark = require('../image/checkmark.png');
    let uncheckMark = require('../image/closemark.png');
    return (
      <Container>

        <Loader show={this.state.isLoading} size="large"/>

       <ImageBackground source={require('../image/registerbg.png')} style={styles.signupBg}>
         <Grid>
            <Row size={0.8} >
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

                  <KeyboardAvoidingView behavior="position">
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Username</Text>
                        <TextInput placeholder="handle" style={styles.inputField} onChangeText={(text)=> {inputFields.username = text;}}></TextInput>
                        <View style={{flex:2, flexDirection:'row'}}>
                        {
                          Utils.renderIf(this.state.handleCheck,
                             <View style={{flex:1, flexDirection:'row'}}>
                             <Image source={uncheckMark} style={{flex:0.5,resizeMode :'contain', width:20, height:18, padding:5, justifyContent:'center', alignSelf:'center'}} />
                             <Text style={{flexWrap: 'wrap', flex:1, textAlign: 'right', padding:5}}>Not Available</Text>
                             </View>
                          )
                        }

                        {
                          Utils.renderIf((typeof this.state.handleCheck == 'boolean' && !this.state.handleCheck),
                            <View style={{flex:1, flexDirection:'row'}}>
                             <Image source={checkMark} style={{flex:0.5,resizeMode :'contain', width:20, height:18, padding:5, justifyContent:'center', alignSelf:'center'}} />
                             <Text style={{flexWrap: 'wrap', flex:1, textAlign: 'right', padding:5}}>Handle Available</Text>
                             </View>
                          )
                        }


                        </View>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput placeholder="email" style={styles.inputField} onChangeText={(text)=> {inputFields.email = text;}}></TextInput>
                        <View style={{flex:2, flexDirection:'row'}}>
                        {
                          Utils.renderIf(this.state.emailCheck,
                              <Image source={uncheckMark} style={{flex:0.5,resizeMode :'contain', width:20, height:18, justifyContent:'flex-start'}} />
                          )
                        }
                        {
                          Utils.renderIf((typeof this.state.emailCheck == 'boolean' && !this.state.emailCheck),
                              <Image source={checkMark} style={{flex:0.5,resizeMode :'contain', width:20, height:18, justifyContent:'flex-start'}} />
                          )
                        }


                        </View>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput placeholder="password" style={styles.inputField} secureTextEntry={this.state.maskPassword} onChangeText={(text)=> {inputFields.password = text;}}></TextInput>
                        <View style={{flex:2, flexDirection:'row'}}>
                            <Button transparent onPress={()=>{ this.showPassword()}} style={{flex:1, paddingLeft:0, paddingRight:0}}>
                              <Text style={styles.formHint}>Show Password</Text>
                            </Button>


                        </View>
                    </View>
                  </KeyboardAvoidingView>


                  <View style={styles.formControlV}>
                    <Text style={styles.privacyText}>By registering I confirm I am over the age of 13 and agree to Privacy Terms & Agreements</Text>
                      <Button onPress = {() => this.doSignup()} transparent style={{alignSelf:'center'}}>
                        <Image source={require('../image/registerbutton.png')} style={{resizeMode:'contain'}}/>
                      </Button>
                    <Button transparent style={{alignSelf : 'center'}}><Text style={styles.linkButton}>Privacy Terms & Agreements</Text></Button>
                    <Button transparent
                      style={{alignSelf : 'center'}} onPress = {()=>{navigate('signin')}}>
                      <Text style={styles.linkButton}>Already have account? Login</Text>
                    </Button>

                  </View>


                </View>


              </View>

            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }



  doSignup(){
    this.setState({isLoading: true});
    const signupUrl = Settings.endPoint + Settings.apis.signup;
    let params = {
      username : inputFields.username,
      password : inputFields.password,
      email : inputFields.email
    }
    Http.post(signupUrl, params).then( (responseJson)=>{

      let response = responseJson.data.data;
      console.log('response',response);

      if(!responseJson.data.error){
        db.insert({schema:Db.SettingsSchema.name, values :[{id:1, membershipId : response.membership, isLoggedIn : true}], isUpdate : true});
        //insert userinfo into UserSchema
        db.insert({ schema : Db.UserSchema.name,
          values :[
              {
                id : 1,
                user_id : response.id,
                name : response.name,
                username : response.username,
                email: response.email,
                dob : response.dob,
                gender : response.gender,
                school : response.school,
                status : response.status,
                phone : response.phone
              }
            ],
            isUpdate : true
          }
        );

        this.setState({isLoading: false});
        Global.loggedin = true;
        Sidebar.refreshList();
        //redirect to home screen
        this.props.navigation.navigate("home");

      }else{
        this.setState({isLoading: false});
        //check what error are thrown form api
        if(Utils.hasKey(response, 'username')) {
          this.setState({handleCheck : true});
        }else{
          this.setState({handleCheck : false});
        }

        if(Utils.hasKey(response, 'email')) {
          this.setState({emailCheck : true});

        }else{
          this.setState({emailCheck : false});
        }

        let error = Utils.parseError(response);
        alert(error);

      }


    }).catch( (error)=>{
      this.setState({isLoading: false});
      alert(error);
      console.log(error);
    });
  }

  showPassword(){
    if(this.state.maskPassword){
      this.setState( {maskPassword: false})
    }else{
      this.setState( {maskPassword: true})
    }

  }

}

export default UserSignup;
