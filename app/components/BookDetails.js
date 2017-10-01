import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import {Container, Body, Content, Header, Left, Right, Button, Icon, Label, Input, ListItem, List, Thumbnail} from  'native-base';
import colors from '../strings/colors';
import styles from '../styles';
import textStyles from '../styles/text';
import lang from '../strings/values_en';
class BookDetails extends Component {
  render(){
    const bookTitle = this.props.title;
    const bookPublishDate = this.props.publishDate;
    const bookAuthor = this.props.author;
    const bookISBN = this.props.isbn;
    const bookThumbnail = this.props.thumbnail;
    return (
      <View style={{flex :1 , flexDirection : 'row'}}>

        <View style={{flex : 0.4, padding : 20 }}>
          <Image source={{uri : bookThumbnail}} style={{flex: 1 , resizeMode :'contain'}}/>
        </View>
        <View style={{flex: 0.6, flexDirection :'column', padding : 20}}>

          <Text style={styles.bookLabels}>
            {lang.book_isbn} <Text>{bookISBN}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_title} <Text>{bookISBN}</Text>
          </Text>
          <Text style={styles.bookLabels}>
            {lang.book_year} <Text>{bookPublishDate}</Text>
          </Text>

        </View>

      </View>
    )
  }
}

export default BookDetails;
