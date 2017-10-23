import React from 'react';
import {findNodeHandle, Platform, AlertIOS, Alert} from 'react-native';
import Http from './http';
import Config from '../config/settings';
import Db from '../config/db';
var db = new Db();
Global  = require('./global');
const utilFunctions  = {
  renderIf(condition, component ){
    if(condition){
      return component;
    }else{
      return null;
    }
  },
  inputFocused (refName) {
    if(Platform.OS == 'ios'){
      setTimeout( () => {
        let scrollResponder = this.refs.scrollView.getScrollResponder();
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          React.findNodeHandle(this.refs[refName]),
          110,
          true
        )
      },50);
    }

  },
  showAlertDialog (...params){
    console.log(params);
    const options = [];
    if(params[0].cancelText) {
      options.push({text : (params[0].cancelText) ? params[0].cancelText : 'Cancel', style :'cancel', onPress : () => params[0].cancelCallback});
    }
    if(params[0].okText){
        options.push({text : (params[0].okText) ? params[0].okText : 'Ok', onPress : () => params[0].okCallback});
    }

    Alert.alert(
      params[0].title,
      params[0].message, options);
    // if(Platform.OS == 'ios'){
    //   AlertIOS.alert(params.title, params.message, [
    //     {text : params.okText, onPress : () => params.okCallback},
    //     {text : params.cancelText, style :'cancel', onPress : () => params.cancelCallback}
    //   ])
    // }else{
    //
    // }
  },
  calcFileSize (size){
    return size / 1024 / 1204; //return kilobytes
  },
  loadUserProfile ( user_id ) {
      const url  = Config.endPointLocal + Config.apis.getUser + "/" + Global.userInfo.user_id;
      console.log('loadUserProfile', url);
      Http.get(url).then( (responseJson) => {
        let response = responseJson.data.data;
        if(response){
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
                  phone : response.phone,
                  profile_pic : response.profile_pic
                }
              ],
              isUpdate : true
            }
          );
          Global.userInfo = db.get(Db.UserSchema)[0];
        }

      }).catch( (error) => {
        console.log(error);
      });
  }

};

export default utilFunctions;
