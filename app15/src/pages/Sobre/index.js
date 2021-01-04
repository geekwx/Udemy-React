
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';


export default function Sobre({ route }) {

  const navigation = useNavigation();

//O ? funciona como uma forma de que se o parametro recebido vier da internet ainda sim nao quebre o programa caso não seja recebido a informação

  navigation.setOptions({
  title: ` Sobre ${route.params?.nome}`,
  })

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      
        <Text> {route.params?.nome}</Text>
        <Text> {route.params?.email}</Text>

        <Button 
        title="Voltar para Home"
        onPress={() => navigation.goBack()}
        />

        
<Button 
        title="Contato"
        onPress={() => navigation.navigate('Contato')}
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
