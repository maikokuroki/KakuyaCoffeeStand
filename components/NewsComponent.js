import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class News extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>News</Text>
                <Text style={styles.title}>News</Text>
                <Text style={styles.title}>News</Text>
                <Text style={styles.title}>News</Text>
                <Text style={styles.title}>News</Text>
            </View>
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

export default News;