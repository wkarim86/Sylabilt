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
import colors from '../strings/colors';
import styles from '../styles/signup';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Settings from '../config/settings';
import Topbar from '../components/Topbar';
import UserThumbnail from '../components/UserThumbnail';
import ShareProfileButton from '../components/ShareProfileButton';
import DatePicker from '../components/DatePicker';
class EditProfile extends Component {
  constructor(props){
    super(props);

  }

  render(){
    const {navigate} = this.props.navigation;
    return(

      <Container>

      <Topbar title={"Edit Profile"} isSearchButton={false} navigateTo={navigate} />
      <ImageBackground source={require('../image/editprofilebg.png')} style={{width: '100%', height : '100%'}}>
      <Content>
        <View style={{justifyContent: 'space-between', flexDirection :'row', padding : 20}}>
        <UserThumbnail  />
        <ShareProfileButton />
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Your Name</Text>
          <TextInput style={styles.inputFieldBigWhite} value='Johnathan Doe' ></TextInput>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Handle</Text>
          <TextInput style={styles.inputFieldBigWhite} value='@JohnathanDoe123' ></TextInput>
          <Button transparent style={{flex:1, justifyContent:'center', alignSelf : 'center'}}>
            <Text style={styles.inputLabel, textStyles.textLinkWhite17}>Change Password</Text>
            </Button>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>E-mail</Text>
          <TextInput style={styles.inputFieldBigWhite} value='john.doe@harvard.edu' ></TextInput>
        </View>

        <View style={styles.formControlV}>
          <Text style={styles.inputLabel, textStyles.textLinkWhite17}>DOB</Text>
          <DatePicker />
        </View>

      </Content>
      </ImageBackground>
      </Container>

    );
  }

}
export default EditProfile;
