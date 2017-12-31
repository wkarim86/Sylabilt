import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Modal

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Http from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import BookDetails from './partials/BookDetails';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';

class ISBNDeals extends Component{
  constructor(props){
    super(props);
    this.state = {isSearch: false, bookDataset : {}, dataLoaded: false, isLoading: false}

  }

  render(){
    const {navigate} = this.props.navigation;

    return(
      <Container>

      <Topbar title="Sylabilt Student Saver" {...this.props} isSearchButton={true} searchBtnEventListner={ ()=> this.toggleSearch() }/>
      <Loader show={this.state.isLoading} size="large"/>

          {
            Utils.renderIf(this.state.isSearh,
              <View style={{backgroundColor:'#F3F3F3', padding:20, height:80}}>
                  <SearchBox placeholder="Enter ISBN number" onChangeText = { (value)=> this.setState({keyword: value})} onSubmitEditing={ () => {this.loadBook()} }/>
               </View>
            )
          }

          <View style={{flex:1}}>

          {
            Utils.renderIf(this.state.dataLoaded,
              <BookDetails datasource={this.state.bookDataset} />
            )
          }



          </View>




      </Container>
    )
  }

toggleSearch = () =>{
  if(this.state.isSearch){
    this.setState({isSearh : false});
  }else{
    this.setState({isSearh : true});
  }

}



   loadBook = () =>{
    let url = Config.chegg.url;
    formData = {
      params: {
        KEY : Config.chegg.apiKey,
        PW : Config.chegg.password,
        R: 'JSON',
        results_per_page : 1,
        V : 4.0,
        isbn : this.state.keyword
      }
    }
    this.setState({isLoading:true});
    Http.get(url, formData).then( (responseJson) => {
      let response = responseJson.data;
      console.log('Chegg',response);

      if(response.Error){
        alert(response.ErrorMessage);
        this.setState({isLoading:false});
      }else{
        this.setBookInfo(response.Data.Items[0]); // Items will always be 1 as getting single book record
        this.setState({dataLoaded: true, isLoading: false});
        console.log('Data', this.getBookData());
      }

    }).catch( (error) => {
      console.log(error);
      this.setState({isLoading:false});
    });

  }

  setBookInfo = ( data ) => {
    this.bookDataset = data;
    this.setState({bookDataset: data});
  }

  getBookData = () => {
    return this.state.bookDataset;
  }

}

export default ISBNDeals;
