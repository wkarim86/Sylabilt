import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
import colors from '../../strings/colors';
import styles from '../../styles';
import textStyles from '../../styles/text';
import lang from '../../strings/values_en';
import BookFilters from '../../components/BookFilters';
import BookAffiliateList from '../../components/BookAffiliateList';
import Utils from '../../lib/utils';

class BookDetails extends Component {
  constructor(props){
    super(props);
    this.state = {views : { buy : false, rent: false, ebook: false} };
    
  }

  render(){
    this.bookTitle = this.props.datasource.BookInfo.Title;
    this.bookPublishDate = this.props.datasource.BookInfo.PubDate;
    this.bookAuthor = this.props.datasource.BookInfo.Authors;
    this.bookISBN = this.props.datasource.ISBN;
    this.bookThumbnail = this.props.datasource.BookInfo.ImageMedium.replace('//', 'http://');
    this.isRenting = this.props.datasource.Renting;
    this.SellPrices  = (Utils.hasKey(this.props.datasource, 'SellPrices')) ? this.props.datasource.SellPrices : [];
    this.RentPrices = (Utils.hasKey(this.props.datasource, 'Terms')) ? this.props.datasource.Terms : [];
    this.Ebook = (Utils.hasKey(this.props.datasource, 'Ebook')) ? this.props.datasource.Ebook : null;
    this.ShippingRate = (Utils.hasKey(this.props.datasource, 'ShippingPrices')) ? this.props.datasource.ShippingPrices : [];
    this.buyBookLists = [];
    this.rentBookLists = [];
    this.eBookLists = [];
    this.loadBuyBookInfo();
    this.loadRentBookInfo();
    this.loadEBookInfo();

    const filterItems = [{
      text : lang.text_buy,
      action : () => {this.filterAction('buy') },
      is_visible: (this.SellPrices.length > 0) ? true : false,
    },{
      text : lang.text_rent,
      action : () => {this.filterAction('rent')},
      is_visible : this.isRenting
    },{
      text : lang.text_sell,
      action : () => {this.filterAction('sell')},
      is_visible : true
    },{
      text : lang.text_ebook,
      action : () => {this.filterAction('ebook')},
      is_visible : (this.Ebook) ? true : false
    }];
    return (
      <View style={{flex :1}}>
      <Row>
        <View style={{flex : 0.4, padding : 20 }}>
          <Image source={{uri : this.bookThumbnail}} style={{flex: 1 , resizeMode :'contain'}}/>
        </View>
        <View style={{flex: 0.6, flexDirection :'column', padding : 20}}>

          <Text style={styles.bookLabels}>
            {lang.book_isbn} <Text>{this.bookISBN}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_title} <Text>{this.bookTitle}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_year} <Text>{this.bookPublishDate}</Text>
          </Text>
        </View>
        </Row>
        <Row size={2}>
          <View style={{flex:1}}>
              <BookFilters filterData = {filterItems}/>
              <ScrollView style={styles.paddingAround}>
              { Utils.renderIf(this.state.views.buy,<BookAffiliateList data={this.buyBookLists} /> ) }
              { Utils.renderIf(this.state.views.rent,<BookAffiliateList data={this.rentBookLists} /> ) }
              { Utils.renderIf(this.state.views.ebook,<BookAffiliateList data={this.eBookLists} /> ) }

              </ScrollView>


          </View>
        </Row>

      </View>
    )
  }

  filterAction = (filter) => {
    switch (filter){
      case 'buy' :
        this.setState({views : { buy : true, rent: false, ebook: false} });
        break;
      case 'rent' :
        this.setState({views : { buy : false, rent: true, ebook: false} });

        break;
      case 'sell' :
        console.log('Need API link to redirect to sell this book');
        break;
      case 'ebook' :
        this.setState({views : { buy : false, rent: false, ebook: true} });

        break;
      default :

        break;
    }
  }

  loadBuyBookInfo = () => {
    let tempData = [];
    tempData.push({ items : this.SellPrices, shipping : this.ShippingRate[0].cost_first, type : 'buy'});
    this.buyBookLists =  tempData;

  }

  loadRentBookInfo = () => {
    let tempData = [];
    tempData.push({ items : this.RentPrices, shipping : this.ShippingRate[0].cost_first, type : 'rent'});
    this.rentBookLists = tempData;

  }

  loadEBookInfo = () => {
    let tempData = [];
    tempData.push({ items : this.Ebook.Terms, shipping : this.ShippingRate[0].cost_first, type : 'ebook'});
    this.eBookLists = tempData;

  }



}

export default BookDetails;
