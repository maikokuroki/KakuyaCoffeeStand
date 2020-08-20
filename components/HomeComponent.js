import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList } from 'react-native';
import { Tile, Card, ListItem } from 'react-native-elements';

import { NEWS } from  '../shared/news';

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
          news: NEWS
        }
      }

    render(){
        return(
            <ScrollView>
                <Text>Home</Text>
            <Tile
              imageSrc={require('./images/kakuyalogo.jpeg')}
              featured
            />
             <Card title="Today's News" image={{uri: this.state.news[0].image}}>
            <ListItem subtitle={this.state.news[0].feed}/>
            </Card> 
              
          </ScrollView>
        );
    }
}



export default Home;