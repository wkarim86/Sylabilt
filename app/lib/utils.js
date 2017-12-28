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
      const url  = Config.endPoint + Config.apis.getUser + "/" + Global.userInfo.user_id;
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
  },
  loadMore(url, extras){
    Http.get(url).then( (response)=> {
        extras.callback(response.data);
    }).catch( (error) => {
      console.log("loadMore: ",error);
    })
  },
  loadPost(offset : int, successCallback = null, errorCallback = null, currentIndex = null){
    const limit = 1; //10 posts per request
    var url = Config.endPoint + Config.apis.post + Global.userInfo.id + '/' + limit;


    Http.get(url, {offset : offset})
    .then( (responseJson) => {
      console.log('Response', responseJson.data);


      if(responseJson.data.data == ''){
        errorCallback({ error : "You have no task yet. Create task by clicking on green + button."})

      }else{
        if(responseJson.data.next_page_url){
          Global.next_page_url = responseJson.data.next_page_url;
          Global.toRecord = responseJson.data.to;
        }
        Global.dataSource = responseJson.data.data;
        successCallback(Global.dataSource);
      }
    }).
    catch( (error) => {


      if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         console.log("error data: ",error.response.data);
         console.log("error status: ",error.response.status);
         console.log("error headers",error.response.headers);
       } else if (error.request) {
         // The request was made but no response was received
         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
         // http.ClientRequest in node.js
         console.log("error request",error.request);
         errorCallback({error : error.request.responseText});


       } else {
         // Something happened in setting up the request that triggered an Error
         console.log('Error', error.message);
         errorCallback({error : error.message});
       }
       console.log("Error Config: ",error.config);
    })
  },
  hasKey(obj, key){
    let arr = Object.keys(obj);
    let result = false;
    arr.forEach( (v) => {
      if(v == key){
        result = true;
      }
    });
    return result;
  },
  parseError (obj) {
    let output = '';
    if(typeof obj != 'undefined'){
      for(keys in obj){
        output += obj[keys] + '\r\n';
      }

    }

    return output;
  }

};

export default utilFunctions;
