import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList } from 'react-native';
import { Tile, Card, ListItem, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
  return{
    news: state.news
  }
}

class Home extends Component{

    render(){
        return(
            <ScrollView>
            <Tile
              imageSrc={{uri: baseUrl + 'images/kakuyalogo.jpeg'}}
              featured
            />
             <Card 
                title="Today's News" 
                image={{uri: baseUrl + this.props.news[0].image}} 
                imageStyle={{height: 300, styleMode: 'cover'}}>
  
            <ListItem subtitle={this.props.news[0].feed}/>
            </Card> 
              
          </ScrollView>
        );
    }
}



export default connect(mapStateToProps)(Home);