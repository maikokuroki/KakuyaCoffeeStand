import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
  

class Event extends Component{
    render(){
        return(
            <View style={{ marginTop: 20 }}>
                <Calendar />
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

export default Event;