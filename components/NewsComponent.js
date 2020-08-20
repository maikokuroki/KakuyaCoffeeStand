import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const handleSubmit = () => {
    return(
        console.log('submitted')

    );
}

const News = () => {
    const [value, onChangeText] = React.useState('Type here...');
  
    return (
        <View>
            <Text>Today's News</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button 
            onPress={handleSubmit}
            title="Submit"
            color="#841584"
            accessibilityLabel="Spread the news!"
            />

        </View> 
    );
  }
  

export default News;