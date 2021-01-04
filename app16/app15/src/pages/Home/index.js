
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();
  function irSobre(){
    navigation.navigate('Sobre', {nome: 'Zelda', email: 'zeldinhagatinha@gmail.com'});
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text> Bem vindo a tela home!!!</Text>
      <Button 
      title="Ir para Sobre"
      onPress={irSobre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
