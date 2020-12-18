
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: false
    };
  }
  
  
  render(){
    return (
      <View style={styles.container}>
        <Switch 
        value={this.state.status}
        onValueChange={ (valueSwitch) => this.setState({ status: valueSwitch }) }
        />


        <Text style={{textAlign:"center", fontSize: 30}}>{(this.state.status) ? "Ativo" : "Inativo"}</Text>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
});

export default App; 