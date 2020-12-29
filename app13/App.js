import React, {useState, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  const [nome, setNome] = useState('Link');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null);

  // Funcionando como um componentDidmount, montando na hora que inicia o programa
  useEffect(() => {

    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if( nomeStorage !== null){
        setNome(nomeStorage);
      }
    }
    getStorage();

  }, []);

  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomes' , nome)
    }
    saveStorage();

  }, [nome]);

  function alteraNome(){
    setNome(input);
    setInput('');
  }
  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo(() => nome.length, [nome]);
  return(
    <View style={styles.container}>
      <TextInput 
      placeholder="Seu Nome"
      value={input}
      ref={nomeInput}
      onChangeText={(texto) => setInput(texto) }
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}> 
        <Text style={styles.btnText}>Altera Nome </Text> 
        </TouchableOpacity> 
      <Text style={styles.texto}> {nome} </Text>
      <Text style={styles.texto}> Tem {letrasNome} letras. </Text>

      <TouchableOpacity style={styles.btn} onPress={novoNome}> 
        <Text style={styles.texto}> Novo nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 15, 
  },
  texto: {
    color: '#000',
    fontSize: 35, 
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 15,
    color: '#FFF',

  }

});