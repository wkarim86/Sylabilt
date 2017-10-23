import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  SegmentedControlIOS

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail,Segment} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import lang from '../strings/values_en';
import styles from '../styles';
import textStyle from '../styles/text';
import PickerView from '../components/PickerView';
import DateTimePicker from 'react-native-datepicker';
import Http from '../lib/http';
import Config from '../config/settings';
import Loader from '../components/Loader';
Global  = require('../lib/global');
var ImagePicker = require('react-native-image-picker');
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

const weekDay  = ['Sun','Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class AddClass extends Component{
  constructor(props){
    super(props);
    this.state = {daySelectedIndex : 0, isLoading : false};
    console.log(Global.userInfo.id);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(



      <Container>
        <Loader show={this.state.isLoading} size="large"/>
      <Topbar title={lang.text_add_class} {...this.props}  />
      <ImageBackground source={require('../image/Groupmeetingbg.png')} style={{width : '100%', height:'100%'}}>
        <Grid>
          <Row size={0.4} style={{flexDirection:'column'}}>
          <List style={{marginLeft:0, paddingLeft:0, backgroundColor:'transparent'}}>
            <ListItem icon style={styles.listItemTransparent} onPress={() => this.showImagePicker()}>
            <Body>
              <Text style={textStyle.textWhiteBig20}>Upload Syllabus</Text>
            </Body>
            <Right>
              <Text ellipsizeMode='tail' numberOfLines={1} style={textStyle.labelWhite15Italic}>{this.state.fileName}</Text>
              { Utils.renderIf(this.state.isAttachment, <Button transparent onPress={() => this._deleteAttachment()}>
                <Icon name="ios-remove-circle"></Icon>
              </Button>
              )}

              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Body>
              <TextInput style={styles.inputFieldWhite} placeholder="Title" placeholderTextColor="white" onChangeText = {(value) => { this.setState({title : value})}}/>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Left>
              <Text style={textStyle.labelWhite}>Day</Text>
            </Left>
            <Body>
            <SegmentedControlIOS
            tintColor='#55C77D'
              values={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
              selectedIndex={this.state.day}
              onChange={(event) => {
                this.setState({day: event.nativeEvent.selectedSegmentIndex});
              }}
              />
            </Body>
            <Right>

            </Right>
            </ListItem>

            <ListItem icon style={styles.listItemTransparent}>
            <Body>
              <Text style={textStyle.labelWhite}>Time</Text>
            </Body>
            <Right>

              <DateTimePicker
                date={this.state.time}
                mode="time"
                placeholder="None"
                format="H:mm"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
                },
                dateInput: {
                borderWidth:0,

              }
                // ... You can check the source to find the other keys.
                }}
                  onDateChange={(time) => { this.setTime(time) }}
            />

              <Icon name="arrow-forward" />
            </Right>
            </ListItem>

            </List>
          </Row>
          <Row size={0.4} style={{flexDirection:'column'}}>

          </Row>
          <Row size={0.2} style={{justifyContent:'space-between', paddingLeft:20, paddingRight:20}}>
            <TouchableHighlight onPress={() => navigate('addtask')}>
              <Text style={textStyle.textLinkWhite17}>{lang.text_cancel}</Text>
              </TouchableHighlight>

                <Button transparent style={{flexDirection:'column'}} onPress={() => this.onAddBtnListener()}>
                  <Image source={require('../image/but.png')} />
                  <Text style={textStyle.labelGreenItalic}>Add</Text>
                </Button>

          </Row>
        </Grid>
      </ImageBackground>
      </Container>
    )
  }

  setTime = (value) => {
    this.setState({time : value});
  }

  onAddBtnListener = () => {
    const formData = {};
    formData.user_id = Global.userInfo.id;
    formData.description = this.state.title;
    formData.task_type = "class";
    formData.attachment_id  = this.state.attachment_id;
    formData.options = [{ "repeat" : "WEEKLY", "byday" : weekDay[this.state.day].toUpperCase(), "time" : this.state.time}];
    this._sendForm(formData);
  }

  _sendForm = (params) => {
    let url = Config.endPointLocal + Config.apis.createPost + '/class';
    this.setState({isLoading : true});
    console.log(params);

    Http.post(url,params)
    .then( (responseJson) => {
      let response = responseJson.data;
      if(!response.error){
        this.setState({isLoading : false});
        alert('Class added successfully');
        this.props.navigation.navigate("addtask");
      }else{
        this.setState({isLoading : false});
        alert(response.data);
      }
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  _updateStates = (obj) =>{
    this.setState(obj);
  };

  showImagePicker = () => {
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.allFiles()],
    },(error,res) => {

      console.log(res);

      if(!error){
          //check file size to Upload
          if(Utils.calcFileSize(res.fileSize) > 10) {
            alert("File size is exceeded. Upload less than 10 MB");
            return false;
          }else{

            //first delete the attached file if upload
            if(this.state.attachment_id) {
                this._deleteAttachment();
            }


            let url = Config.endPointLocal + Config.apis.upload;
            let mimeType = "application/pdf,application/octet-stream,application/vnd.mspowerpoint";
            let filename = res.fileName.split('.');

            let formData = new FormData();
            formData.append("type", "post");
            formData.append("attachment",{uri : res.uri, type : mimeType, name : filename[0]});

            this._updateStates({fileName : filename[0], isLoading: true, isAttachment: true});


            Http.defaults.headers.post['Content-Type'] = 'multipart/form-data';
            Http.post(url,formData).then( (response) => {
                if(!response.data.error) {

                  this._updateStates({isLoading: false, attachment_id : response.data.data.id});
                }

            }).catch( (error) => {
              console.log(error);
            });
          }
      }

      // Android
      // console.log(
      //    res.uri,
      //    res.type, // mime type
      //    res.fileName,
      //    res.fileSize
      // );
    });
  }

  _deleteAttachment = () => {
    let url = Config.endPointLocal + Config.apis.removeUploadFile + this.state.attachment_id;
    Http.post(url).then( (response) => {
        console.log("Remove Uploaded File", response.data);
        this._updateStates({attachment_id: null, fileName : "", isAttachment: false});

    }).catch( (error) => {
        console.log(error);
    });
  }

}
export default AddClass;
