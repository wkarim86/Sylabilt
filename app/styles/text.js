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
  },
  labelWhiteItalic : {
    fontSize : 20,
    color : colors.white,
    fontStyle : 'italic',
    fontFamily: 'SteelfishRg-Italic'
  },
  textLinkWhite15 : {
    fontSize : 15,
    color : colors.white,
    fontFamily: 'SteelfishRg-Regular'
  },
  textLinkWhite17 : {
    fontSize : 17,
    color : colors.white,
    fontFamily: 'SteelfishRg-Regular'
  },
  mysyllabiButton : {
    fontSize : 17,
    color : colors.white,
    fontFamily: 'SteelfishRg-Regular',
    alignSelf : 'center'
  }

}

export default textStyle;
