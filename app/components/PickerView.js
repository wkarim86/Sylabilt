import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground,
  Picker
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../strings/colors';
import style from '../styles';
import textStyle from '../styles/text';

class PickerView extends Component{

  constructor(props){
    super(props);

    this.state = {selectedIndex : this.props.selectedIndex, isShowing : this.props.isOpen, selectedValue : null};
  }


  cancelHandle = () => {
    this.setState({isShowing : false, selectedLabel : 'None', selectedValue : null})
  }
  onValueChangeHandle = (value, index) => {

    this.setState({selectedValue : value,  selectedIndex : value});

  }

  show = () => {
    this.setState({isShowing : true});
  }

  hide = () => {
    this.setState({isShowing : false});
  }

  isOpen = () => {
    return this.state.isShowing;
  }


  render(){

      if(this.state.isShowing) {

        return (
        <View style={{backgroundColor:"rgba(0,0,0,0.5)", position:'absolute',zIndex:4, width:'100%', height:'100%', flex:1, flexDirection:'column'}}>

        <View style={{flex:0.7}} />
        <View style={{backgroundColor:'white', flex:0.4}}>
        <View style={{borderBottomWidth:1, borderBottomColor:'#ccc', flex:1, flexDirection:'row', justifyContent:'space-around'}}>
          <Button transparent onPress={this.cancelHandle}><Text style={{color:colors.cancel}}>{(this.props.cancelText) ? this.props.cancelText : 'Cancel'}</Text></Button>
          <Text style={{color:'black', textAlign:'center', alignSelf:'center'}}>{(this.props.optionTitle) ? this.props.optionTitle : 'Choose options'}</Text>
          <Button transparent onPress={() => this.props.confirmCallback(this.state.selectedValue)}><Text style={{color:colors.buttonColor}}>{(this.props.confirmText) ? this.props.confirmText : 'Confirm'}</Text></Button>
        </View>
        <Picker
            style={{height:200}}
            selectedValue={this.state.selectedIndex}
            onValueChange={this.onValueChangeHandle}
            >
            {
                this.props.dataItems.map( (item, index) => {
                  return <Picker.Item label={item.label} value={item.value} key={index}  />
                })
            }

          </Picker>

        </View>

        </View>
      );
      }else{
        return null;
      }

  }
}
export default PickerView;
