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
    top : 50,
    marginBottom : 50,
    fontSize : 17,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
  },
  orLabel : {
    marginTop : 60,
    textAlign : 'center',   
    fontSize : 17,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
  },
  socialButtonGroup : {
    top : 60,
    marginBottom : 60,
    justifyContent : 'center',   
    flexDirection : 'row'    
  },
  socialButton  : {
    width: 50,
    height: 50,
    resizeMode : 'contain',
    marginLeft: 5,
    marginRight: 5,
    padding: 0
  },
  inputField : {
    fontSize : 17,    
    fontFamily : 'SteelfishRg-Regular',
    paddingTop : 10,
    paddingBottom : 10
  }
  
}
