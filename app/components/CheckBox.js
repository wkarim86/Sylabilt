import React, { Component} from 'react';
import { View, Image, ImageBackground,TouchableHighlight, Button} from 'react-native';
const defaults = {borderRadius: 6, borderWidth: 2, borderColor:'#fff', width: 45, height: 30}

class CheckBox extends Component{
  // constructor(props){
  //   super(props);
  //   console.log(defaults);
  //   if(this.props.customStyle){
  //     defaults.style.borderRadius = (this.props.customStyle.borderRadius) ? (this.props.customStyle.borderRadius) : defaults.style.borderRadius;
  //     defaults.style.borderWidth = (this.props.customStyle.borderWidth) ? (this.props.customStyle.borderWidth) : defaults.style.borderWidth;
  //     defaults.style.borderColor = (this.props.customStyle.borderColor) ? (this.props.customStyle.borderColor) : defaults.style.borderColor;
  //     defaults.style.width = (this.props.customStyle.width) ? (this.props.customStyle.width) : defaults.style.width;
  //     defaults.style.height = (this.props.customStyle.height) ? (this.props.customStyle.height) : defaults.style.height;
  //   }
  //   console.log('customStyle', defaults.style);
  //
  //
  // }



  render(){
    const {value, style} = this.props;
    const customStyle = Object.assign(defaults, style);
    return(
      <View style={{borderRadius : customStyle.borderRadius, borderColor : customStyle.borderColor, borderWidth : customStyle.borderWidth, width : customStyle.width, height : customStyle.height }}>
        <TouchableHighlight onPress={() => this.onToggle(value)}>
          {this.renderCheckBox(value)}
        </TouchableHighlight>
      </View>
    )
  }

renderCheckBox(value){

  if(value){
    return <Image source={require('../image/checkmarklarge.png')} style={{resizeMode : 'contain', position:'absolute', top: -10}} />
  }else{
    return <View style={{height:31, width:45, flex:1, position:'absolute'}} />;
  }
}

onToggle (value) {
  let toggleValue;
  if(value){
    toggleValue = false;
  }else{
    toggleValue = true;
  }
  this.props.onToggle(toggleValue);
}

}

CheckBox.defaultProps = {
  value : false,
  style : {}
}

export default CheckBox;
