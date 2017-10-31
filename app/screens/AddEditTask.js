import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  Picker,
  Alert
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Http from '../lib/http';
import Config from '../config/settings';
import Loader from '../components/Loader';
import TaskTypeDropdown from '../components/TaskTypeDropdown';
import DateTimePicker from 'react-native-datepicker';
import PickerView from '../components/PickerView';
import lang from '../strings/values_en';
Global  = require('../lib/global');
var classData = [];
var repeatData = [
  {label : 'None', value:null},
  {label : 'Daily', value:'DAILY'},
  {label : 'Weekly', value:'WEEKLY'},
  {label : 'Monthly', value:'MONTHLY'},
  {label : 'Yearly', value:'YEARLY'}
];

var alertData = [
  {label : 'None', value : null},
  {label : 'At time of event', value : '-PT0M'},
  {label : '5 minutes before', value : '-PT5M'},
  {label : '10 minutes before', value : '-PT10M'},
  {label : '15 minutes before', value : '-PT15M'},
  {label : '30 minutes before', value : '-PT30M'},
  {label : '1 hour before', value : '-PT1H'},
  {label : '2 hours before', value : '-PT2H'},
  {label : '1 day before', value : '-P1D'},
  {label : '2 days before', value : '-P2D'},
];
var formData = {
  user_id  : null,
  title : null,
  parent : 0,
  task_type : null,
  description : null,
  options : []
};

var tempOptions = {};

class AddEditTask extends Component{
  constructor(props){
    super(props);
    this.state = {isVisible : false, isLoading : false};
    formData.user_id = Global.userInfo.id;
    this.loadClass();
  }



  render(){
    const {navigate} = this.props.navigation;
    const {isVisible} = this.state;
    return(
      <Container>
      <Topbar title="Add Task" {...this.props} />
      <Loader show={this.state.isLoading} size="large"/>
      <ImageBackground source={require('../image/agendabg.png')} style={{width: '100%', height : '100%'}}>
      <Content>
      {
        Utils.renderIf(isVisible,
          <TaskTypeDropdown eventHandle={this.TaskTypeCallback}/>
        )
      }

        <View style={styles.boxCenter}>
          <Button transparent onPress={() => this.onSubmit() }>
            <Image source={require('../image/confirm.png')} style={{width : 145, resizeMode :'contain'}} />
          </Button>
        </View>

        <List>

          <ListItem icon onPress={() => { this.toggleVisible() }} style={{backgroundColor:'transparent'}}>
            <Body>
              <Text style={textStyles.textBig40}>Task Type</Text>
            </Body>
            <Right>
              <Text>{(this.state.task_label) ? this.state.task_label : 'None'}</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{backgroundColor:'transparent'}}>
            <Body>
              <Text style={textStyles.textBig40}>Start Date</Text>
            </Body>
            <Right>

            <DateTimePicker
              date={this.state.start_date}
              mode="datetime"
              placeholder="None"
              format="YYYY-MM-DD H:mm"
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
                onDateChange={(date) => { this.setDate(date) }}
          />

              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon style={{backgroundColor:'transparent'}}>
            <Body>
              <Text style={textStyles.textBig40}>End Date</Text>
            </Body>
            <Right>

            <DateTimePicker
              date={this.state.end_date}
              mode="datetime"
              placeholder="None"
              format="YYYY-MM-DD H:mm"
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
                onDateChange={(edate) => { this.setEndDate(edate) }}
          />

              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.openClassSelectionDropdown()}}>
            <Body>
              <Text style={textStyles.textBig40}>Class</Text>
            </Body>
            <Right>
              <Text>{ (this.state.class_label) ? this.state.class_label : 'None' }</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.toggleDropdown(this.refs.AlertPicker) }}>
            <Body>
              <Text style={textStyles.textBig40}>Alert</Text>
            </Body>
            <Right>
              <Text>{(this.state.alert_label) ? this.state.alert_label : "None" }</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.toggleDropdown(this.refs.RepeatPicker) }}>
            <Body>
              <Text style={textStyles.textBig40}>Repeat</Text>
            </Body>
            <Right>
              <Text>{ (this.state.repeat_label) ? this.state.repeat_label : 'None'}</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>

        <View style={styles.textArea}>
          <TextInput maxLength={250} multiline={true} editable={true} placeholder = 'Task Notes : ' onChangeText={(value) => { formData.description = value}} />
        </View>

      </Content>
      </ImageBackground>


      <PickerView
        dataItems={classData}
        selectedIndex={formData.parent}
        confirmCallback={ (value) => {this.classConfirmHandle(value)}}
        confirmText={(classData.length > 0) ? 'Confirm' : 'Add Class' }
        ref="ClassPicker"
      />


      <PickerView
        dataItems={repeatData}
        selectedIndex={this.state.repeatSelectedValue}
        confirmCallback={ (value) => {this.repeatConfirmHandle(value)}}
        ref="RepeatPicker"
      />

      <PickerView
        dataItems={alertData}
        selectedIndex={this.state.alertSelectedValue}
        confirmCallback={ (value) => {this.alertConfirmHandle(value)}}
        ref="AlertPicker"
      />


      </Container>
    )
  }


  setFormData = (...params) => {
    this.setState({params});
  }


    toggleVisible() {
      if(this.state.isVisible){
        this.setState({isVisible : false});
      }else{
        this.setState({isVisible : true});
      }
    }

    toggleDropdown = (Ref) => {
      let currentState = Ref.isOpen();
      if(currentState){
        Ref.hide();
      }else{
        Ref.show();
      }
    }

    TaskTypeCallback = (value) => {
      this.setState({isVisible:false, task_label: value.toUpperCase()});
      formData.task_type = value;
    }


    loadClass = () => {
      classData = [];
      let url = Config.endPoint + Config.apis.getClass +'/' + Global.userInfo.id;
      Http.get(url)
      .then( (responseJson) => {
        let response = responseJson.data.data;
        console.log('loadCLass');
        console.log(response);
        response.map((value, index) => {
          classData.push({label : value.class, value: value.id});
        })

      }).catch( (error)=> {
        console.log(error);
      })
    }


    classConfirmHandle = (value) => {

          formData.parent = value;
          classData.forEach( (item) => {
            if(item.value == value) {
              this.setState({class_label : item.label});
            }
          })
        this.refs.ClassPicker.hide();
    }

    repeatConfirmHandle = (value) => {
        tempOptions.repeat = value;
        repeatData.forEach( (item) => {
          if(item.value == value) {
            this.setState({repeatSelectedValue : item.value, repeat_label : item.label});
          }
        })
        this.refs.RepeatPicker.hide();


    }

    alertConfirmHandle = (value) => {
      tempOptions.alert = value;
        alertData.forEach( (item) => {
          if(item.value == value) {
            this.setState({alertSelectedValue : item.value, alert_label : item.label});
          }
        })
        this.refs.AlertPicker.hide();
    }

    setDate = (date) => {
      this.setState({start_date : date});
      tempOptions.start_date = date;
    }

    setEndDate = (date) =>{
      this.setState({end_date : date});
      tempOptions.end_date = date;
    }

    onSubmit = () => {
      let url = Config.endPoint + Config.apis.createPost + '/' +  formData.task_type;
      console.log(url);
      console.log("onSubmit : ");
      formData.options = [];
      formData.options.push(tempOptions);
      console.log(formData);



      if(!formData.description || formData.description == null){
        alert('Description is required');
        return;
      }

      if(!formData.task_type || formData.task_type == null){
        alert('Task type is required');
        return;
      }
       if(!formData.parent || formData.parent == 0){
         alert('Class is required');
         return;
       }


      this.setState({isLoading : true});

      Http.post(url,formData)
      .then( (responseJson) => {
        let response = responseJson.data;
        console.log(response);
        if(!response.error){
          this.setState({isLoading : false});
          alert('Task successfully created');
          this.props.navigation.navigate("home");
        }else{
          this.setState({isLoading : false});
          alert(response.data);
        }
      })
      .catch( (error) => {
        console.log(error);
      });
    }


    openClassSelectionDropdown = () => {
      if(classData.length == 0) {
        Alert.alert(
          lang.text_heading_class_error,
          lang.text_error_class_notfound,
          [{text : 'Not Now', style:'cancel'}, {text: 'Add Class', onPress : ()=> { this.props.navigation.navigate('addclass', {prevRoute: 'addtask'})}}],
          {cancelable: true}
          )
      }else{
        this.toggleDropdown(this.refs.ClassPicker);
      }
    }

}
export default AddEditTask;
