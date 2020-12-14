import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

 class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0, 
    };

  }

   render(){
  return (
    <View style={styles.container}>
      <Image 
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />
      <Text style={styles.timer}>{this.state.numero}</Text>
      <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>VAI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>STOP</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor :'#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
  flexDirection: 'row',
  marginTop: 70,
  height: 40,   
  },
  btn: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FFF',
    height: 40, 
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#00aeef',

  }
});
export default App;