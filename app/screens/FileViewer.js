import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  WebView
} from 'react-native';
import {Container, Body, Content,Button} from  'native-base';
import styles from '../styles';
import textStyles from '../styles/text';
import Topbar from '../components/Topbar';
import Loader from '../components/Loader';
import Config from '../config/settings';

class FileViewer extends Component {
  constructor(props){
    super(props);
    this.state = { isLoading : true};
    console.log("FileViewer", Config.resourceUrl + this.props.navigation.state.params.file);
  }

  render(){
    const url = Config.resourceUrl + this.props.navigation.state.params.file;
    return (
      <Container>
       <Loader show={this.state.isLoading} size="large"/>
        <Topbar title={this.props.navigation.state.params.title} {...this.props} isBackButton={true}/>
        <WebView
          source={{uri: url}}
          onLoadEnd={() => {this.setState({isLoading : false})}}

         />
      </Container>

    )
  }

}
export default FileViewer;
