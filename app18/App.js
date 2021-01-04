import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';

import firebase from './src/firebaseConnection'


export default function App(){
  
  
    const [nome, setNome] = useState('Carregando...');
  
    useEffect(() => {

    }, [])
  
    return(

    <View style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}> Olá!!! {nome} </Text>
    </View> 

  );
}

