import { StyleSheet } from 'react-native';
import colors from '../strings/colors';
export default{
  signupBg : {
    width: '100%',
    height : '100%',
    zIndex:1
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
    flex:1,
    textAlign:'center'
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

 },
 inputFieldWhite : {
   fontSize : 20,
   fontFamily : 'SteelfishRg-Regular',
   color : colors.white,
   borderBottomWidth : 1,
   borderBottomColor : colors.transparent,
 },
 inputFieldWhite2 : {
   fontSize : 20,
   fontFamily : 'SteelfishRg-Regular',
   color : colors.white,
   borderBottomWidth : 1,
   borderBottomColor : colors.white,
 },
 alignCenter : {
   flex:1,
   justifyContent:'center',
   alignSelf : 'center'
 },
 paddingAround : {
   padding:20
 },
 boxCenter :{
   padding: 20,
   flex : 1 ,
   justifyContent : 'center',
   alignSelf : 'center'
 },
 image20 : {
   resizeMode : 'contain',
   width  : 20,
   height : 20
 },
 textArea : {
   padding :10,
   borderRadius : 20,
   backgroundColor : '#DCDEE0',
   flex : 1,
   shadowColor : colors.black,
   shadowOffset : { width : 1, height : 2},
   shadowOpacity : 0.8,
   shadowRadius:3,
   height : 100,
   margin : 15
 },
 fullWidth : {
   width : '100%',
   height : '100%'
 },
 paddingHorizontal : {
   paddingLeft : 15,
   paddingRight : 15
 },
 marginHorizontal : {
   marginLeft : 15,
   marginRight : 15
 },
 bookLabels : {
   fontSize: 20,
   fontFamily : 'SteelfishRg-Regular',
   marginBottom : 15
 },
 bookFilterButton : {
   backgroundColor : '#55C77D',
   padding: 10,
   marginLeft: 5,
   marginRight: 5

 },
 bookListItem : {
   backgroundColor : '#55C77D',
   borderRadius : 5,
   padding : 10,
   flex : 1,
   marginTop : 5,
   marginBottom : 5,
   marginLeft: 10,
   marginRight : 10
 },
 listItemTransparent : {
   backgroundColor : 'transparent',

 },
 inputFieldForgotEmail : {
   fontSize : 20,
   fontFamily : 'SteelfishRg-Regular',
   color : colors.grey,
   borderBottomWidth : 1,
   borderBottomColor : colors.grey,
   width : '100%',
   height : 40,
   padding: 5
 },
 inviteButton : {
   borderRadius : 60,
   backgroundColor : colors.buttonColor,
   width: 100,
   height : 30,
   flex:1,
   justifyContent:'center'
 },
 loader : {
   width:'100%',
   height:'100%',
   position:'absolute',
   backgroundColor:'rgba(0,0,0,0.5)',
   flex:1,
   justifyContent:'center',
   zIndex:2
 },
 iconFont: {
   fontSize : 20,
   height : 22,
   color : 'white'
 }

}
