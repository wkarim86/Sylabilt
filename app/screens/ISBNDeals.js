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
import BookDetails from '../components/BookDetails';
import BookFilters from '../components/BookFilters';
import BookAffiliates from '../components/BookAffiliates';
import SearchBox from '../components/SearchBox';

class ISBNDeals extends Component{
  constructor(props){
    super(props);
    this.state = {isSearch: false}

  }





  render(){
    const {navigate} = this.props.navigation;
    const filterItems = [{
      text : lang.text_buy,
      action : () => {this.filterAction('buy') }
    },{
      text : lang.text_rent,
      action : () => {this.filterAction('rent')}
    },{
      text : lang.text_sell,
      action : () => {this.filterAction('sell')}
    },{
      text : lang.text_ebook,
      action : () => {this.filterAction('ebook')}
    }];

    return(
      <Container>
      <Topbar title="Sylabilt Student Saver" {...this.props} isSearchButton={true} searchBtnEventListner={ ()=> this.toggleSearch() }/>

        <Grid>
          {
            Utils.renderIf(this.state.isSearh,
              <Row size={0.2} style={{backgroundColor:'#F3F3F3', padding:20}}>
                  <SearchBox placeholder="Enter ISBN number" onChangeText = { (value)=> this.setState({keyword: value})} onSubmitEditing={ this.loadBook() }/>
               </Row>
            )
          }
          <Row size={1}>

              <BookDetails title="Critical Thinking, Ninth Edition" publishDate="July 22nd, 2008" isbn="0073386677" thumbnail="https://images-na.ssl-images-amazon.com/images/I/41vX-ZjCTbL.jpg" />

          </Row>
          <Row size={2}>
            <View style={{flex:1}}>
                <BookFilters filterData = {filterItems}/>
                <BookAffiliates />

            </View>
          </Row>
        </Grid>


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

  filterAction = (filter) => {
    switch (filter){
      case 'buy' :
        alert('Buy filter called');
        break;
      case 'rent' :
        alert('Rent filter called');
        break;
      case 'sell' :
        alert('Sell filter called');
        break;
      case 'ebook' :
        alert('Ebook filter called');
        break;
      default :
        alert('All filter applied');
        break;
    }
  }

  loadBook = () =>{
    let url = 'http://api.chegg.com/rent.svc';
    console.log(Config.chegg.apiKey);
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
    Http.get(url, formData).then( (responseJson) => {
      let response = responseJson.data;
      console.log('Chegg',response);

    }).catch( (error) => {
      console.log(error);
    });
  }

}

export default ISBNDeals;
