import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar 
      backgroundColor="#131313"
      barStyle="light-content"
      />
     <Routes/>
    </NavigationContainer>
  );
}