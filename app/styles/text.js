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
  font15Italic : {
    fontSize : 15,
    fontStyle : 'italic',
    fontFamily : 'SteelfishRg-Italic'
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
  labelWhite15Italic : {
    fontSize : 15,
    color : colors.white,
    fontStyle : 'italic',
    fontFamily: 'SteelfishRg-Italic'
  },
  labelGreenItalic : {
    fontSize : 25,
    fontWeight: 'bold',
    color : colors.buttonColor,
    fontStyle : 'italic',
    fontFamily: 'SteelfishRg-Italic'
  },
  labelWhite : {
    fontSize : 20,
    color : colors.white,
    fontFamily: 'SteelfishRg-Regular'
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
  },
  downloadPDF : {
    fontSize : 20,
    fontFamily : 'SteelfishRg-Regular',
    color : colors.white,
    textAlign : 'center'
  },
  exportError : {
    fontSize : 30,
    fontFamily : 'SteelfishRg-Regular',
    width : '100%',
    justifyContent : 'center',
    textAlign : 'center'
  },
  alignCenter : {
    justifyContent : 'center',
    alignItems : 'center'
  },
  bookFilterButtonText : {
    fontSize : 20,
    fontFamily : 'SteelfishRg-Regular',
    color : colors.white,
    textAlign : 'center'
  },
  bookListItemText : {
    fontSize : 20,
    fontFamily : 'SteelfishRg-Regular',
    color : colors.white,
    marginBottom : 5
  },
  bookListItemPrice : {
    fontSize : 25,
    fontFamily : 'SteelfishRg-Regular',
    color : colors.white
  },
  friendListItem : {
    fontSize: 20,
    fontFamily : 'SteelfishRg-Italic',
    fontStyle : 'italic',
    color : colors.white
  },
  textBigItalic20 : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 20,
    fontWeight : 'bold'
  },
  textBig40 : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 30,
  },
  textBigItalic40 : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 30,
  },
  textBig30 : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 25,
    fontWeight: 'bold'
  },
  textBigItalic30 : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    fontWeight : 'bold'
  },
  textBigItalic20 : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 20,
    fontWeight : 'bold'
  },
  textWhiteBig20 : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    fontWeight: 'bold',
    color : colors.white
  },
  textWhiteBig30 : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 30,
    fontWeight: 'bold',
    color : colors.white
  },
  textGrey30 : {
    color : colors.grey,
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 25
  },
  textCategoryOptions : {
    fontSize: 30,
    fontFamily : 'SteelfishRg-Italic'
  },
  whatsnext : {
    fontSize: 40,
    fontFamily : 'SteelfishRg-Regular',
    fontWeight :'bold',
    color: colors.buttonColor,
    transform : [{rotate : '-5deg'}],
    alignSelf :'center'
  },
  textDue : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 25,
    fontWeight: 'bold',
    color : colors.white
  },
  textDate : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 50,
    fontWeight : 'bold',
    color: colors.white
  },
  textWeekName : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 25,
    fontWeight: 'bold',
    color : colors.black
  },
  textClass : {
    fontSize: 35,
    fontFamily : 'BradleyHandITCTT-Bold',
    fontWeight :'bold',
    color: colors.orange,
    transform : [{rotate : '-5deg'}, {translateX : -50}],
    alignSelf :'center'
  },
  taskDescription : {
    fontSize: 18,
    fontFamily : 'BradleyHandITCTT-Bold',
    fontWeight : 'bold',
    color: colors.white,
    paddingTop: 20
  },
  labelUsername : {
    fontSize: 20,
    fontFamily: 'BradleyHandITCTT-Bold',
    fontWeight : 'bold',
    color: colors.black
  },
  textNotFound : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize : 25,
    fontWeight: 'bold',
    color : colors.white,
    textAlign: 'center'
  },
  labelHome : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    color: colors.homework
  },
  labelTest : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    color: colors.test
  },
  labelQuiz : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    color: colors.quiz
  },
  labelReview : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    color: colors.review
  },
  labelMisc : {
    fontFamily : 'SteelfishRg-Italic',
    fontSize : 25,
    color: colors.misc
  },
  dateLabel : {
    fontSize: 70,
    fontFamily : 'SteelfishRg-Regular',
    fontWeight :'bold',
    color: colors.buttonColor,
    alignSelf :'center',
    textDecorationLine:'underline'
  },
  dayLabel : {
    fontSize: 30,
    fontFamily : 'SteelfishRg-Regular',
    fontWeight :'bold',
    color: colors.buttonColor,
    transform : [{rotate : '-20deg'}],
    alignSelf :'center'
  },
}

export default textStyle;
