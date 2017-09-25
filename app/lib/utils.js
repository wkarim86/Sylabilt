import React from 'react';

const utilFunctions  = {
  httpServe(...params){
    return params;
  },
  renderIf(condition, component ){
    if(condition){
      return component;
    }else{
      return null;
    }
  }

};

export default utilFunctions;
