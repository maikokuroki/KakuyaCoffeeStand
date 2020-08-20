import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './components/MenuComponent';
import About from './components/AboutComponent';
import Main from './components/MainComponent';


export default function App() {
  return (
    <Main />
  );
}
