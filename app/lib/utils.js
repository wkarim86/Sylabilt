import React from 'react';
const utilFunctions  = {
  renderIf(condition, component ){
    if(condition){
      return component;
    }else{
      return null;
    }
  }

};

export default utilFunctions;
