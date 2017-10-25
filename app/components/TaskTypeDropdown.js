import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ActivityIndicator,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyle from '../styles/text';

class TaskTypeDropdown extends Component{
  constructor(props){
    super(props);
    this.state = {modalVisible : false}
  }

  toggleShow = (state) => {
    this.setState({modalVisible : state});
  }

  render(){
    return(


           <View style={{flex:1,marginTop: 22 , width: 200, height:390, position:'absolute', right:10, top : '15%' ,zIndex:5}}>
           <ImageBackground source={require('../image/tasksidebar.png')} style={styles.fullWidth}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
              <List style={{width:150}}>
                <ListItem onPress={() => this.props.eventHandle('homework')} style={[{backgroundColor:'transparent'}, styles.borderBottom]}>
                  <Left style={{flex:1, justifyContent:'center'}}>
                    <Text style={[textStyle.textCategoryOptions, {color : colors.homework}]}>Homework</Text>
                  </Left>
                </ListItem>
                <ListItem onPress={() => this.props.eventHandle('test')} style={[{backgroundColor:'transparent'}, styles.borderBottom]}>
                  <Left style={{flex:1, justifyContent:'center'}}>
                    <Text style={[textStyle.textCategoryOptions, {color : colors.test}]}>Test</Text>
                  </Left>
                </ListItem>
                <ListItem onPress={() => this.props.eventHandle('quiz')} style={[{backgroundColor:'transparent'}, styles.borderBottom]}>
                  <Left style={{flex:1, justifyContent:'center'}}>
                    <Text style={[textStyle.textCategoryOptions, {color : colors.quiz}]}>Quiz</Text>
                  </Left>
                </ListItem>
                <ListItem onPress={() => this.props.eventHandle('review')} style={[{backgroundColor:'transparent'}, styles.borderBottom]}>
                  <Left style={{flex:1, justifyContent:'center'}}>
                    <Text style={[textStyle.textCategoryOptions, {color : colors.review}]}>Review</Text>
                  </Left>
                </ListItem>
                <ListItem onPress={() => this.props.eventHandle('Misc')} style={[{backgroundColor:'transparent'}, styles.borderBottom]}>
                  <Left style={{flex:1, justifyContent:'center'}}>
                    <Text style={[textStyle.textCategoryOptions, {color : colors.misc}]}>Misc</Text>
                  </Left>
                </ListItem>

                </List>

            </View>
            </ImageBackground>
           </View>


    )
  }
}

export default TaskTypeDropdown;
