import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: 0
    };
  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}> Menu Pizza</Text>
      <Picker selectedValue={} onValueChange={}>
        <Picker.Item key={1} value={1} label='Calabresa'/>
        <Picker.Item key={2} value={2} label='Brigadeiro'/>
        <Picker.Item key={3} value={3} label='Strogonoff'/>
      </Picker>

      <Text style={styles.pizza}>Você escolhe: Pizza Calabresa</Text>
      <Text style={styles.pizza}>R$ 59,90</Text>
        
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, 
  },
  logo: {
    textAlign: 'center',
    fontsize: 28,
    fontWeight: 'bold', 

  }, 
  pizza: {
    marginTop: 15, 
    fontSize: 28, 
    textAlign: 'center', 

  }
});
