import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        feed: [
          {id:'1', nome: 'Wesley', idade: 30, email: 'wesley@wesley.com'},
          {id:'2',nome: 'Joao', idade: 22, email: 'joao@joao.com'},
          {id:'3',nome: 'Henrique', idade: 39, email: 'henrique@henrique.com'},
          {id:'4',nome: 'Paulo', idade: 15, email: 'paulo@paulo.com'},
        ]
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <FlatList 
        data={this.state.feed}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => <Pessoa data={item} />}
      />
            
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default App;

class Pessoa extends Component{
  render(){
    return (
      <View> 
        <Text>Nome:  {this.props.data.nome} </Text>
        <Text>Idade: {this.props.data.idade} </Text>
        <Text>Email: {this.props.data.email} </Text>
        
      </View>
    );
  }
}