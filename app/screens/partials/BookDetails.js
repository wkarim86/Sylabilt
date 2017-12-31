import React, { Component } from 'react';
import {
  Text,
  Image,
  View
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
  render(){
    const bookTitle = this.props.datasource.BookInfo.Title;
    const bookPublishDate = this.props.datasource.BookInfo.PubDate;
    const bookAuthor = this.props.datasource.BookInfo.Authors;
    const bookISBN = this.props.datasource.ISBN;
    const bookThumbnail = this.props.datasource.BookInfo.ImageMedium.replace('//', 'http://');
    const isRenting = this.props.datasource.Renting;
    const SellPrices  = (Utils.hasKey(this.props.datasource, 'SellPrices')) ? this.props.datasource.SellPrices : [];


    console.log('datasource',this.props.datasource);

    const filterItems = [{
      text : lang.text_buy,
      action : () => {this.filterAction('buy') },
      is_visible: true,
    },{
      text : lang.text_rent,
      action : () => {this.filterAction('rent')},
      is_visible : this.isRenting
    },{
      text : lang.text_sell,
      action : () => {this.filterAction('sell')},
      is_visible : (this.SellPrices) ? true : false
    },{
      text : lang.text_ebook,
      action : () => {this.filterAction('ebook')},
      is_visible : true
    }];
    return (
      <View style={{flex :1}}>

      <Row>

        <View style={{flex : 0.4, padding : 20 }}>
          <Image source={{uri : bookThumbnail}} style={{flex: 1 , resizeMode :'contain'}}/>
        </View>
        <View style={{flex: 0.6, flexDirection :'column', padding : 20}}>

          <Text style={styles.bookLabels}>
            {lang.book_isbn} <Text>{bookISBN}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_title} <Text>{bookTitle}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_year} <Text>{bookPublishDate}</Text>
          </Text>

        </View>
        </Row>

        <Row size={2}>
          <View style={{flex:1}}>
              <BookFilters filterData = {filterItems}/>
              <BookAffiliateList />

          </View>
        </Row>

      </View>
    )
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


}

export default BookDetails;
