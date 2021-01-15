
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './src/TaskList'

import firebase from './src/firebaseConnection'

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    {key: '1', nome: 'Comprar pao'},
    {key: '2', nome: 'Aprender React Native com firebase'},
    {key: '3', nome: 'Seguir o sujeito'},
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
        style={styles.input}
        placeholder="o que vai fazer hoje?"
        underlineColorAndroid="transparent"
        onChangeText={(texto) => {setNewTask(texto)}}
        value={newTask}
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
        <FlatList 
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={ ({item}) => (
          <TaskList data={item}  />
        )}
        />
     
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
