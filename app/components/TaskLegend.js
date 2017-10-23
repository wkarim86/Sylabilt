import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Modal,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyle from '../styles/text';

class TaskLegend extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(


           <View style={{flex:1,marginTop: 22 , width: 150, height:260, position:'absolute', right:20, top : '15%' ,zIndex:5, backgroundColor:colors.primary, borderRadius: 10}}>

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
              <List style={{width:150}}>
                <ListItem style={{backgroundColor:'transparent', borderBottomWidth:0}}>
                  <Left style={{flex:0.2, justifyContent:'center'}}>
                      <View style={{backgroundColor: colors.homework, width:10, height:10, borderRadius:10}}>
                      </View>
                  </Left>
                  <Body style={{flex:0.8, justifyContent:'center'}}>
                      <Text style={[textStyle.textBigItalic20, {textAlign:'center'}]}>Homework</Text>
                  </Body>
                </ListItem>
                <ListItem style={{backgroundColor:'transparent' ,borderBottomWidth:0}}>
                  <Left style={{flex:0.2, justifyContent:'center'}}>
                    <View style={{backgroundColor: colors.test, width:10, height:10, borderRadius:10}}>
                    </View>
                  </Left>
                  <Body style={{flex:0.8, justifyContent:'center'}}>
                    <Text style={[textStyle.textBigItalic20, {textAlign:'center'}]}>Test</Text>
                  </Body>
                </ListItem>
                <ListItem style={{backgroundColor:'transparent', borderBottomWidth:0}}>
                  <Left style={{flex:0.2, justifyContent:'center'}}>
                    <View style={{backgroundColor: colors.quiz, width:10, height:10, borderRadius:10}}>
                    </View>
                  </Left>
                  <Body style={{flex:0.8, justifyContent:'center'}}>
                    <Text style={[textStyle.textBigItalic20, {textAlign:'center'}]}>Quiz</Text>
                  </Body>
                </ListItem>
                <ListItem style={{backgroundColor:'transparent', borderBottomWidth:0}}>
                  <Left style={{flex:0.2, justifyContent:'center'}}>
                    <View style={{backgroundColor: colors.review, width:10, height:10, borderRadius:10}}>
                    </View>
                  </Left>
                  <Body style={{flex:0.8, justifyContent:'center'}}>
                    <Text style={[textStyle.textBigItalic20, {textAlign:'center'}]}>Review</Text>
                  </Body>
                </ListItem>
                <ListItem style={{backgroundColor:'transparent', borderBottomWidth:0}}>
                  <Left style={{flex:0.2, justifyContent:'center'}}>
                    <View style={{backgroundColor: colors.misc, width:10, height:10, borderRadius:10}}>
                    </View>
                  </Left>
                  <Body style={{flex:0.8, justifyContent:'center'}}>
                    <Text style={[textStyle.textBigItalic20, {textAlign:'center'}]}>Misc</Text>
                  </Body>
                </ListItem>

                </List>

            </View>

           </View>


    )
  }
}

export default TaskLegend;
