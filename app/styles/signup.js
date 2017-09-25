import { StyleSheet } from 'react-native';
import colors from '../strings/colors';
export default{
  signupBg : {
    resizeMode : 'contain',
    flex: 1,
    position:'absolute',
    width: '100%',
    height : '100%'
  },
  registerTextStyle : {
    textAlign : 'center',
    width:'100%',
    fontSize:40,
    fontWeight: 'bold',
    fontFamily:'SteelfishRg-Regular'
  },
  withLabel : {
    textAlign : 'center',
    top : 40,
    marginBottom : 20,
    fontSize : 17,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
  },
  orLabel : {
    marginTop : 40,
    textAlign : 'center',
    fontSize : 17,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
  },
  socialButtonGroup : {
    width : '50%',
    top : 40,
    marginBottom : 10,
    justifyContent : 'space-around',
    flexDirection : 'row',
    alignSelf : 'center'
  },
  socialButton  : {
    width: 50,
    height: 50,
    resizeMode : 'contain',
    marginLeft: 5,
    marginRight: 5,
    padding: 0
  },
  inputLabel : {
    fontSize : 17,
    fontFamily : 'SteelfishRg-Regular',
    flex:1.5,
    textAlign:'right'
  },
  formControl : {
    flex:0,
    flexDirection :'row',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10
  },
  inputField : {
    flex:3,
    marginLeft:10,
    borderBottomWidth:1
  },
  formHint : {
    flexWrap: 'wrap',
    flex:1,
    padding:5,
    textAlign : 'right'
  },
  privacyText : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 17,
    textAlign : 'center',
    flex: 0,
    marginBottom : 15
  },
  formControlV : {
    flex:1,
    flexDirection :'column',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
    
  },
  linkButton : {
    fontStyle : 'italic',
    color :'#2365BA',
    textDecorationLine : 'underline'
  },
  marginVertical : {
    marginTop: 15,
    marginBottom : 15
  },
  socialButtonGroupSignin : {
    width : '50%',
    marginBottom : 30,
    justifyContent : 'space-around',
    flexDirection : 'row',
    alignSelf : 'center'
  },
  linkButtonBlack : {
    fontFamily : 'SteelfishRg-Italic',
    fontStyle : 'italic',
    color :'#000000'
  },
  loginButton : {
    fontSize : 17,
    fontFamily : 'SteelfishRg-Regular'

  },
 inputFieldBigWhite : {
   fontSize : 26,
   fontFamily : 'SteelfishRg-Regular',
   color : colors.white,
   borderBottomWidth : 1,
   borderBottomColor : colors.white,
   flex : 1,
   width : '70%',
   textAlign : 'center'
 }


}
