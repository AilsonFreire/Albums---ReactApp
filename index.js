//Import a library to help to create a component 
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
const App = () => (
        <Text>Some Text</Text>
);

//Render it to the 
AppRegistry.registerComponent('Albuns', () => App);
