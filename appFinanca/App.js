import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';

import AuthProvider from  './src/contexts/auth';


import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider>
      <StatusBar 
        
        backgroundColor="#131313"
        barStyle="light-content"
        />
     <Routes/>
        </AuthProvider>
    </NavigationContainer>
  );
}
