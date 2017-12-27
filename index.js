//Import a library to help to create a component 
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
        <Header />
);

//Render it to the 
AppRegistry.registerComponent('Albuns', () => App);
