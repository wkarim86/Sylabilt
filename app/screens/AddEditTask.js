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
  {label : 'Daily', value:1},
  {label : 'Weekly', value:2},
  {label : 'Monthly', value:3},
  {label : 'Yearly', value:4}
];

var alertData = [
  {label : 'At time of event', value : 1},
  {label : '5 minutes before', value : 2},
  {label : '10 minutes before', value : 3},
  {label : '15 minutes before', value : 4},
  {label : '30 minutes before', value : 5},
  {label : '1 hour before', value : 6},
  {label : '2 hours before', value : 7},
  {label : '1 day before', value : 8},
  {label : '2 days before', value : 9},
];
var formData = {
  title : null,
  parent : 0,
  task_type : null,
  description : null,
  option_values : null
};

var options = [];

class AddEditTask extends Component{
  constructor(props){
    super(props);
    this.state = {isVisible : false};
    formData.user_id = Global.userInfo.id;
    this.loadClass();
  }



  render(){
    const {navigate} = this.props.navigation;
    const {isVisible} = this.state;
    return(
      <Container>
      <Topbar title="Add Task" {...this.props} />
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
              <Text>{(formData.task_type) ? formData.task_type : 'None'}</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{backgroundColor:'transparent'}}>
            <Body>
              <Text style={textStyles.textBig40}>Date</Text>
            </Body>
            <Right>

            <DateTimePicker
              date={this.state.date}
              mode="datetime"
              placeholder="None"
              format="YYYY-MM-DD h:mm:ss"
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
          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.openClassSelectionDropdown()}}>
            <Body>
              <Text style={textStyles.textBig40}>Class</Text>
            </Body>
            <Right>
              <Text>{ (formData.classTitle) ? formData.classTitle : 'None' }</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.toggleDropdown(this.refs.AlertPicker) }}>
            <Body>
              <Text style={textStyles.textBig40}>Alert</Text>
            </Body>
            <Right>
              <Text>{(formData.option_values.alert.label) ? formData.option_values.alert.label : "None" }</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon style={{backgroundColor:'transparent'}} onPress={() => { this.toggleDropdown(this.refs.RepeatPicker) }}>
            <Body>
              <Text style={textStyles.textBig40}>Repeat</Text>
            </Body>
            <Right>
              <Text>{ (formData.option_values.repeat.label) ? formData.option_values.repeat.label : 'None'}</Text>
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
      formData.task_type = value;
      this.setState({isVisible:false});
    }


    loadClass = () => {
      let url = Config.endPointLocal + Config.apis.getClass +'/' + Global.userInfo.id;
      Http.get(url)
      .then( (responseJson) => {
        let response = responseJson.data.data;
        console.log('loadCLass');
        console.log(response);
        response.map((value, index) => {
          classData.push({label : value.title, value: value.id});
        })

      }).catch( (error)=> {
        console.log(error);
      })
    }


    classConfirmHandle = (value) => {
      formData.parent = value
          this.setState({formData: {parent : value}});
          classData.forEach( (item) => {
            if(item.value == value) {
              formData.classTitle = item.label;
            }
          })
          this.refs.ClassPicker.hide();
    }

    repeatConfirmHandle = (value) => {

        repeatData.forEach( (item) => {
          if(item.value == value) {
            formData.option_values.repeat.option_value = item.label;
            formData.option_values.repeat.label = item.label;
            this.setState({repeatSelectedValue : item.value});

          }
        })
        this.refs.RepeatPicker.hide();


    }

    alertConfirmHandle = (value) => {
        alertData.forEach( (item) => {
          if(item.value == value) {
            formData.option_values.alert.label = item.label;
            formData.option_values.alert.option_value = item.value;
            this.setState({alertSelectedValue : item.value});
          }
        })
        this.refs.AlertPicker.hide();
    }

    setDate = (date) => {
      formData.option_values.date.option_value = date;
      this.setState({date : date});
    }

    onSubmit = () => {
      let url = Config.endPointLocal + Config.apis.createPost + formData.task_type;

      if(!formData.task_type || formData.task_type == null){
        alert('Task type is required');
        return;
      }
       if(!formData.parent || formData.parent == 0){
         alert('Class is required');
         return;
       }

       //Fix this portion don't need to create extra array
       //prepare options
       var postOptions = [];
       postOptions.push(formData.option_values.alert);
       postOptions.push(formData.option_values.repeat);
       postOptions.push(formData.option_values.date);

       //parse only valid data
       var optionParam = [];
       postOptions.map((value, index) => {
         if(value.option_value == null || !value.option_value){
           return;
         }else{
           optionParam.push(value);
         }
       });

      console.log(optionParam);

      Http.post(url,formData)
      .then( (responseJson) => {
        let response = responseJson.data;
        console.log(response);
        if(!response.error){
          alert('Task successfully created');
          this.props.navigation.navigate("home");
        }else{
          alert(response.data);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
    }


    openClassSelectionDropdown = () => {
      if(classData.length == 0) {
        Alert.alert(
          lang.text_heading_class_error,
          lang.text_error_class_notfound,
          [{text : 'Not Now', style:'cancel'}, {text: 'Add Class', onPress : ()=> { this.props.navigation.navigate('addclass')}}],
          {cancelable: true}
          )
      }else{
        this.toggleDropdown(this.refs.ClassPicker);
      }
    }

}
export default AddEditTask;
