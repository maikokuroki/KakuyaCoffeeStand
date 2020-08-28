import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal } from 'react-native';
import { Card, ListItem, Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addNews } from '../redux/ActionCreator';
import { baseUrl } from '../shared/baseUrl';


  
const mapStateToProps = state => {
    return{
      news: state.news
    }
}

const mapDispatchToProps = {
    addNews: (id, name, feed, image) => (addNews(id, name, feed, image))
}


class News extends Component{

    constructor(props){
        super(props);
        this.state={
            showModal: false,
        }
    }
      
    toggleModal(){
        this.setState({showModal: !this.state.showModal});
    }
    
    handleNews(){
        const {id, name, feed, image} = this.setState
        this.props.addNews(id, name, feed, image);
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            showModal: false,
            name: 'Kakuya',
            feed: '',
        });
    }

    render(){

        const renderNews = ({item}) => {
            return (
                <View>
                <Card 
                    image={{uri: baseUrl + item.image}}
                    title={item.date}
                    imageStyle={{height: 300}}
                >
    
                <ListItem
                    title={item.feed}
                    subtitle={item.name}
                    
                />
                </Card>
                </View>
            );
    }

        return(
            <ScrollView>
                
                <Button
                    title="Post Update"
                    type="outline"
                    onPress={() => {
                        this.toggleModal();
                        
                    }}
                    />
                <FlatList
                    data={this.props.news}
                    renderItem={renderNews}
                    keyExtractor={item => item.id.toString()}
                    />

                <Modal 
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                <View>
                    <Input
                        placeholder='Name'
                        onChangeText={value => this.setState({name: value})}
                        value={this.state.name}
                        />
                    <Input
                        placeholder='Feed'
                        onChangeText={value => this.setState({feed: value})}
                        value={this.state.feed}
                        />
                    <Button 
                        onPress={() => {
                            this.handleNews();
                        }}
                        title="Submit"
                        color="#841584"
                        accessibilityLabel="Spread the news!"
                        />

                    <Button
                        onPress={() => {
                        this.toggleModal();
                        }}
                        color='#808080'
                        title='Cancel'
                        />
                       
                </View>
                </Modal>
            </ScrollView>
    
          
          );
      }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(News);