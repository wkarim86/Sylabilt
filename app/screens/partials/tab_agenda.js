import React, { Component} from 'react';
import { View, Image, ImageBackground, Text, ScrollView, RefreshControl} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../../strings/colors';
import style from '../../styles';
import textStyle from '../../styles/text';
import Utils from '../../lib/utils';
import Http from '../../lib/http';
import Config from '../../config/settings';
import Loader from '../../components/Loader';
import AgendaListView from '../../components/AgendaListView';
import NotFound from '../../components/NotFound';

Global = require('../../lib/global');

export default class TabAgenda extends Component{

  constructor(props){
    super(props);
    this.state = {dataSource : [], isLoading : false, notFound : false, refreshing : false};
  }

  componentDidMount(){
    this._loadPost(0);
  }

  _loadPost = (offset : int) => {
    const limit = 1; //10 posts per request
    //var url = Config.endPoint + Config.apis.post + Global.userInfo.id + '/' + limit;


    Utils.loadPost(limit, this._successCallback, this._errorCallback);

    // Http.get(url, {offset : offset})
    // .then( (responseJson) => {
    //   console.log('Response', responseJson.data);
    //
    //
    //   if(responseJson.data.data == ''){
    //     this.setState({notFound : true, errorMsg : "You have no task yet. Create task by clicking on green + button."});
    //   }else{
    //     if(responseJson.data.next_page_url){
    //       next_page_url = responseJson.data.next_page_url;
    //       toRecord = responseJson.data.to;
    //     }
    //     this.reloadData(responseJson.data.data);
    //   }
    // }).
    // catch( (error) => {
    //   this.setState({isLoading : false, notFound : true});
    //   if (error.response) {
    //      // The request was made and the server responded with a status code
    //      // that falls out of the range of 2xx
    //      console.log("error data: ",error.response.data);
    //      console.log("error status: ",error.response.status);
    //      console.log("error headers",error.response.headers);
    //    } else if (error.request) {
    //      // The request was made but no response was received
    //      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //      // http.ClientRequest in node.js
    //      console.log("error request",error.request);
    //      this.setState({errorMsg: error.request.responseText});
    //
    //    } else {
    //      // Something happened in setting up the request that triggered an Error
    //      console.log('Error', error.message);
    //    }
    //    console.log("Error Config: ",error.config);
    // })
  }

  reloadData = ( obj ) => {
    this.setState({dataSource : obj, isLoading:  false, notFound : false});
  }

_onRefresh(){
  console.log("onRefresh");
  this.setState({refreshing : true});
  setTimeout( ()=> {
    this.setState({refreshing: false});
    this._loadPost(0);
    console.log("data refreshed");
  }, 3000);
}

_onScroll = (event) => {
  let itemHeight = 220;
  let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
  let currentItemIndex = Math.ceil(currentOffset / itemHeight);
  console.log("offset", currentItemIndex);
  if(currentItemIndex == Global.toRecord){
    if(Global.next_page_url) {
      Utils.loadMore(Global.next_page_url, {
        callback : (res) => {
          Global.next_page_url = res.next_page_url;
          Global.toRecord  = res.to;
          let tempData = this.state.dataSource;
          res.data.map( (v, k) => {
            tempData.push(v);
          })
          console.log(tempData);
          this.setState({dataSource : tempData});
          

        }
      });
    }

  }
}

_successCallback = (data) => {
  this.reloadData(data);
}

_errorCallback = (data) => {
    this.setState({isLoading : false, notFound : true, errorMsg : data.error});
}

  render () {
    return (
      <View style={{flex:1}}>
        <Loader show={this.state.isLoading} size="large"/>


      <View style={{flex:0.2, height: 50, marginTop:20}}>
        <Text style={textStyle.whatsnext}>Whats Next?</Text>
      </View>

      <ScrollView style={style.paddingAround} refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={ this._onRefresh.bind(this)} />
      } onScroll={this._onScroll} scrollEventThrottle={300}>
        {Utils.renderIf(this.state.notFound, <NotFound text={this.state.errorMsg}/>)}
        <List
          dataArray={this.state.dataSource}
          renderRow={(item) => <AgendaListView data={item} />  }
        />

      </ScrollView>

      </View>

    )
  }
}
