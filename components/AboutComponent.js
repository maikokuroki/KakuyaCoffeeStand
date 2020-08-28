import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import MapView from 'react-native-maps';


function About(){
    return(
        <View>
            <Card 
               title='ABOUT US'
               image={{uri: baseUrl + 'images/entrance.png'}}
               imageStyle={{height: 300}}>
                <Text style={{marginBottom: 10}}>
                     Kakuya Coffee Stand originally started as hand-pulling cart.
                </Text>
                <Text>
                     The owner Kakuya carried his coffee cart serving coffee different region of Japan.
                </Text>
                <Text>
                     When he arrived Nishi-funabashi, he fell in love with the area and he started to continuously serve in this area.
                </Text>
                <Text>   
                     He was still serving coffee off of the cart at parking lot in alley way.
                </Text>
                <Text>
                     Over years, with his beloved personality, it became a small community that Kakuya Coffee Stand is where people hang out and chill.
                </Text>
                <Text>
                     After few years of serving outdoor, he recently took his next step to opened small coffee shop.
                </Text>
                
                </Card>

                
        </View>
    );
}



export default About;