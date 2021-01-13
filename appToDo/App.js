
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import firebase from './src/firebaseConnection'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
        style={styles.input}
        placeholder="o que vai fazer hoje?"
        underlineColorAndroid="transparent"
        onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
    marginLeft: 10,
    marginRight: 10,
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    flex:1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight: 14,
    marginLeft: 5,
  },
  buttonText:{
    fontSize: 23,
    color: '#FFF',

  }
});
