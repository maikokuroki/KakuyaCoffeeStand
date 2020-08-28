import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, Card, ListItem} from 'react-native-elements';
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
                imageStyle={{height: 300}}
                >
  
            <ListItem subtitle={this.props.news[0].feed}/>
            </Card>
              
          </ScrollView>
        );
    }
}



export default connect(mapStateToProps)(Home);