import React from 'react';
import {findNodeHandle, Platform, AlertIOS, Alert} from 'react-native';

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
    Alert.alert(
      params.title,
      params.message, [
      {text : params.cancelText, style :'cancel', onPress : () => params.cancelCallback},
      {text : params.okText, onPress : () => params.okCallback}
    ]);
    // if(Platform.OS == 'ios'){
    //   AlertIOS.alert(params.title, params.message, [
    //     {text : params.okText, onPress : () => params.okCallback},
    //     {text : params.cancelText, style :'cancel', onPress : () => params.cancelCallback}
    //   ])
    // }else{
    //
    // }
  }

};

export default utilFunctions;
