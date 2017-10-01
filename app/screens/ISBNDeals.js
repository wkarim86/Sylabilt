import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput

} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Utils from '../lib/utils';
import Topbar from '../components/Topbar';
import Server from '../lib/http';
import Config from '../config/settings';
import lang from '../strings/values_en';
import BookDetails from '../components/BookDetails';
import BookFilters from '../components/BookFilters';
import BookAffiliates from '../components/BookAffiliates';

class ISBNDeals extends Component{
  constructor(props){
    super(props);

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
      <Topbar title="Sylabilt Student Saver" navigateTo={navigate} isSearchButton={true}/>

        <Grid>
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


}

export default ISBNDeals;
