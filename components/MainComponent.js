import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Menu from './MenuComponent';
import About from './AboutComponent';
import Twitter from './TwitterComponent';
import Event from './EventComponent';
import Home from './HomeComponent';
import AdminLogin from './AdminLoginComponent';

const MainStack = createStackNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} />
        </HomeStack.Navigator>
    );
}

const MenuStack = createStackNavigator();
function MenuStackScreen(){
    return(
        <MenuStack.Navigator>
            <MenuStack.Screen name='Menu' component={Menu} />
        </MenuStack.Navigator>
    );
}

const AboutStack = createStackNavigator();
function AboutStackScreen(){
    return(
        <AboutStack.Navigator>
            <AboutStack.Screen name='About' component={About} />
        </AboutStack.Navigator>
    );
}

const TwitterStack = createStackNavigator();
function TwitterStackScreen(){
    return(
        <TwitterStack.Navigator>
            <TwitterStack.Screen name='Twitter' component={Twitter} />
        </TwitterStack.Navigator>
    );
}

const EventStack = createStackNavigator();
function EventStackScreen(){
    return(
        <EventStack.Navigator>
            <EventStack.Screen name='Event' component={Event} />
        </EventStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function TabNavigator(){
    return(
        <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeStackScreen} options={{tabBarIcon: () => <Icon name='home' type='font-awesome' />}} />
                <Tab.Screen name='Menu' component={MenuStackScreen} options={{tabBarIcon: () => <Icon name='coffee' type='font-awesome' />}} />
                <Tab.Screen name='About' component={AboutStackScreen} options={{tabBarIcon: () => <Icon name='user' type='font-awesome' />}} />
                <Tab.Screen name='Twitter' component={TwitterStackScreen} options={{tabBarIcon: () => <Icon name='comments' type='font-awesome' />}} />
                <Tab.Screen name='Event' component={EventStackScreen} options={{tabBarIcon: () => <Icon name='calendar' type='font-awesome' />}} />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function MainNavigator(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={TabNavigator} />
                <Drawer.Screen name='AdminLogin' component={AdminLogin} />
            </Drawer.Navigator>
       
        </NavigationContainer>
    );
}

function Main(){
    return(
        <MainNavigator />
    );
}

export default Main;
    

