import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Content, List, ListItem, Text, Body, Left, Right, Button, Thumbnail} from 'native-base';
import colors from '../strings/colors';
import style from '../styles/userpic';
import Config from '../config/settings';
import Http from '../lib/http';
import Utils from '../lib/utils';
import Loader from '../components/Loader';
var ImagePicker = require('react-native-image-picker');
import Db from '../config/db';
var db = new Db();
Global  = require('../lib/global');

class UserThumbnail extends Component {

  constructor(props){
    super(props);
    this.state = {imageSource : this.props.imageSource};

  }




  render(){
    return (
      <Button onPress={() => this._onUpdateProfilePic() } transparent style={{justifyContent:'center', alignItems:'center', height : 'auto', flexDirection : 'column', flex : 0}} >
        <Thumbnail source={ (this.state.imageSource) ? { uri : this.state.imageSource} : require('../image/editprofileico.png') }/>
        <Text>Edit Picture</Text>
      </Button>


    )
  }



  _onUpdateProfilePic () {


    // More info on all the options is below in the README...just some common use cases shown here
   //  customButtons: [
   //    {name: 'fb', title: 'Choose Photo from Facebook'},
   //  ],


    var options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: response.uri
        });

        //update picture on server
        this._uploadOnServer(response);


      }
    });

  }


  _uploadOnServer(fileSource) {

    if(Utils.calcFileSize(fileSource.fileSize) > 10) {
       Utils.showAlertDialog({ title : "File Error", message : "File size is exceeded. Upload less than 10 MB", okText : ""});
       return false;
    }else{


        let url = Config.endPointLocal + Config.apis.upload;
        let mimeType = "image/jpeg,image/gif, image/png";
        let filename = fileSource.fileName.split('.');

        let formData = new FormData();
        formData.append("type", "profile");
        formData.append("user_id", Global.userInfo.user_id);
        formData.append("attachment",{uri : fileSource.uri, type : mimeType, name : filename[0]});
        console.log(formData, url);

        Http.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        Http.post(url,formData).then( (response) => {
            if(!response.data.error) {
              Utils.showAlertDialog({title : "Picture Update", message : "Your profile picture hase been updated.", okText : "Alright"});
              db.insert({ schema : Db.UserSchema.name,
                values :[
                    {
                      id : 1,
                      profile_pic : response.data.data.file
                    }
                  ],
                  isUpdate : true
                }
              );

            }else{
              Utils.showAlertDialog({title : "File Upload", message:  response.data.error, okText:""});
            }

        }).catch( (error) => {
          console.log(error);
        });
  }
}

}

export default UserThumbnail;
