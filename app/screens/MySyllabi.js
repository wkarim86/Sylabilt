import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ImageBackground
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
import NotFound from '../components/NotFound';
Global  = require('../lib/global');
var classData = [];
class MySyllabi extends Component {
  constructor(props){
    super(props);
    this.state = {editMode : false, notFound : false, isLoading: true, dataSource : []}
    this.loadClass();
  }
  render(){
    const {navigate} = this.props.navigation;
    var items = ['Accounting A14', 'Earth Science', ' Chem 183', 'Maths101'];
    var rowbg = require('../image/button.png');
    var removeBtn = require('../image/delete.png');
    var addBtn = require('../image/add.png');
    var isEditMode = this.state.editMode;
    var klass  = this.state.dataSource.map((item, key) => {
          return <Row key={key}>
                <Button transparent style={{flex:1, height : 54, justifyContent : 'center', marginTop : 10, marginBottom : 10}} onPress = {()=> { this.loadAttachment({title : item.label, file : item.attachment})}}>
                  <Image source={rowbg} style={{position:'absolute'}} />
                    <Text style={textStyles.mysyllabiButton}>{item.label}</Text>
                </Button>
                {Utils.renderIf(isEditMode,
                    <Button style={{alignSelf : 'center'}} transparent onPress={() => this.deleteSylabi(item.value)}>
                    <Image source={removeBtn} style={{resizeMode : 'contain', width:20, height:20}}/>
                  </Button>
                )}

                </Row>;
    });
    return(
      <Container>
        <Loader show={this.state.isLoading} size="large"/>
        <Topbar title="MySyllabi" {...this.props} isEditButton={true} editBtnEventListner={ this.editAction }/>
        <ImageBackground source={require('../image/syllabusBg.png')} style={{width: '100%', height : '100%'}}>
        <View style={{alignItems:'flex-end', justifyContent:'flex-end', padding : 10}}>
          {Utils.renderIf(this.state.editMode,
            <Button transparent style={{alignSelf:'flex-end'}} onPress = {() => this.openAddClass()}>
              <Image source={addBtn} style={{width:40, height:40, resizeMode: 'contain'}} />
            </Button>
          )}
        </View>

        <Content style={{padding:40}}>
          {Utils.renderIf(this.state.notFound, <NotFound text={this.state.errorMsg}/>)}
            <Grid>
              {klass}
            </Grid>
        </Content>
      </ImageBackground>

      </Container>

    );
  }


    editAction =() => {
      if(!this.state.editMode){
        this.setState({editMode : true});
      }else{
        this.setState({editMode : false});
      }
    }

    deleteSylabi = (id) => {
        alert(id);
    }

   openAddClass() {
     this.props.navigation.navigate('addclass', {prevRoute : 'mysyllabi'});
   }

   loadAttachment(params) {
     console.log('Params',params);
     this.props.navigation.navigate('fileviewer', {prevRoute : 'mysyllabi', file : params.file, title : params.title});
   }

   loadClass = () => {
     classData = [];
     let url = Config.endPointLocal + Config.apis.getClass +'/' + Global.userInfo.id;
     Http.get(url)
     .then( (responseJson) => {
       this.setState({isLoading: false});
       let response = responseJson.data.data;
       if(response == ''){
         this.setState({notFound : true, errorMsg : "No class found. Add class clicking on top right button"});
       }else{
         this.setState({notFound: false});
         response.map((value, index) => {
           let file = (value.attachment.length > 0) ? value.attachment[0].file : null;
           classData.push({label : value.class, value: value.id, attachment : file});
         });

         this.setState({dataSource : classData});
       }


       console.log("Classes: ",classData);

     }).catch( (error)=> {
       if(error.request){
         this.setState({isLoading: false, notFound: true, errorMsg : error.request.responseText});
       }
     })
   }

}

export default MySyllabi;
