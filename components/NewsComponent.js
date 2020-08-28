import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal, Image } from 'react-native';
import { Card, ListItem, Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addNews } from '../redux/ActionCreator';
import { baseUrl } from '../shared/baseUrl';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


  
const mapStateToProps = state => {
    return{
      news: state.news
    }
}

const mapDispatchToProps = {
    addNews: (id, name, feed, image) => (addNews(id, name, feed, image))
}


const NewsFeedInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
        maxLength={100}
      />
    );
  }

class News extends Component{

    constructor(props){
        super(props);
        this.state={
            showModal: false,
            imageUrl: ''
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

    
    getImageFromDevice = async () => {
        const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
            const capturedImage = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [3, 3],
                quality: 1,
              });
            if (!capturedImage.cancelled) {
                console.log(capturedImage);
                this.setState({imageUrl: capturedImage.uri});
            }
        }
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
                    style={styles.button}
                    />
                <FlatList
                    data={this.props.news}
                    renderItem={renderNews}
                    keyExtractor={item => item.id.toString()}
                    />

                <Modal 
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                    style={styles.container}
                >
                    <Input
                        placeholder='Name'
                        onChangeText={value => this.setState({name: value})}
                        value={this.state.name}
                        />
                    <NewsFeedInput
                        placeholder='Feed'
                        multiline
                        numberOfLines={8}
                        onChangeText={value => this.setState({feed: value})}
                        value={this.state.feed}
                        
                        />
                    <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image
                            source={{uri: this.state.imageUrl}}
                            loadingIndicatorSource={{uri: baseUrl + 'images/logo03.png'}}
                            style={styles.image}
                        />
                    <Button 
                        title="Pick an Image"
                        onPress={this.getImageFromDevice}
                    />
                    </View>
                    <Button 
                        onPress={() => {
                            this.handleNews();
                        }}
                        title="Submit"
                        color="#5F9EA0"
                        type="outline"
                        accessibilityLabel="Spread the news!"
                        />

                    <Button
                        onPress={() => {
                        this.toggleModal();
                        }}
                        type="outline"
                        title='Cancel'
                        />
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
    },
    button: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    container: {
        margin: 20
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(News);