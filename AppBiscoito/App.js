
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render(){
    return (
      <View style={styles.container}>
      <Image 
      source={require('./src/biscoito.png')}
      styles={styles.img}
      /> 
      <Text> Alguma frase aqui!</Text>
       
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  img: {
    width: 250, 
    height: 250 
  }
});
export default App;