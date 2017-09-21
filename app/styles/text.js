import { StyleSheet } from 'react-native';
import colors from '../strings/colors';
const textStyle ={
  textAlignCenter: {
    textAlign : 'center',
    justifyContent : 'center'
  },
  textItalicBoldWhite : {
    color : colors.white,
    fontWeight : 'bold',
    fontStyle : 'italic',
    letterSpacing : -1
  },
  font17 : {
    fontSize : 17,
    fontStyle : 'normal',
    fontFamily : 'SteelfishRg-Regular'
  },
  font15 : {
    fontSize : 15,
    fontStyle : 'normal',
    fontFamily : 'SteelfishRg-Regular'
  },
  font17Italic : {
    fontSize : 17,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
  }
  
  
}

export default textStyle;