import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';

import { MENU } from '../shared/menu';
import { baseUrl } from '../shared/baseUrl';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menu: MENU
        }
    }

    render(){

        const renderMenu = ({item}) => {
            return (
                <Card title={item.name} image={{uri: item.image}}>

                <ListItem
                    subtitle={item.description}
                />
                </Card>
            );
        };
    return(
        <ScrollView>
            <Text style={styles.title}>MENU</Text>
            <FlatList
                    data={this.state.menu}
                    renderItem={renderMenu}
                    keyExtractor={item => item.id.toString()}
                    />
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

export default Menu;