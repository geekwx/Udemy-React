
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';




//Aprender slider
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 50, 

    };

  }
  render(){

  
  return (
    <View style={styles.container}>
      
<Slider 
  minimumValue={0}
  maximumValue={100}
  onValueChange={ (valorSelecionado) => this.setState({ valor: valorSelecionado})}
  value={this.state.value} 
  minimumTrackTintColor="#00FF00"
  maximumTrackTintColor="#FF0000"
  
/>

      <Text style={{textAlign: 'center', fontSize: 30}}> {this.state.valor.toFixed(1)}</Text>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,

  },
});

export default App;