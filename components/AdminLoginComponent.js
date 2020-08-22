import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-elements';

class Login extends Component{
    

    login(){
        const password = this.props.password;
        if(password === 'SuperSecretPassword'){
            console.log('Congrats!')
        }
        return console.log('fail')
    }    

    render(){
        return(
            <View>
                <TextInput 
                placeholder='Password'
                value={this.props.password}
                
                />
                <Button onPress={() => this.login()}/>
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

export default Login;