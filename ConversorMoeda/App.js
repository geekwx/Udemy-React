
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';


//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=856f740fb0f137faf6a2
export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Conversor moedaA={'USD'} moedaB={'BRL'}/>   
      <Conversor moedaA={'EUR'} moedaB={'BRL'}/>      
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
