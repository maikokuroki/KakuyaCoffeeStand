import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class About extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>About</Text>
                <Text style={styles.title}>About</Text>
                <Text style={styles.title}>About</Text>
                <Text style={styles.title}>About</Text>
                <Text style={styles.title}>About</Text>
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

export default About;