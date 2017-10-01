import colors from '../strings/colors';
const sidebarStyle  = {
   container  : {
     flex: 1
   },
   header : {
    backgroundColor: colors.headerColor

  },
  headerButtons : {
    flex : 2
  },
  headerTitle : {
    fontFamily : 'SteelfishRg-Regular',
    fontSize: 27,
    fontWeight :'bold',
    color : colors.white,
    textAlign : 'center'
  },
  footer : {
    padding:5,
    backgroundColor : 'transparent',
    borderWidth : 0
  },
  menuItem : {
    fontWeight : 'bold',
    color : colors.primary

  }
}
export default sidebarStyle;
