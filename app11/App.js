
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpAnimado: new Animated.Value(0)
    };

    this.carregarGrafico = this.carregarGrafico.bind(this);

    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(
    //       this.state.LarAnimada,
    //       {
    //         toValue: 200,
    //         duration: 400
    //       }
    //     ),
    //     Animated.timing(
    //       this.state.LarAnimada,
    //       {
    //         toValue: 150, 
    //         duration: 400
    //       }
    //     )
    //   ])
    // ).start();

  // Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(
  //         this.state.LarAnimada,
  //         {
  //           toValue: 200,
  //           duration: 400
  //         }
  //       ),
  //       Animated.timing(
  //         this.state.LarAnimada,
  //         {
  //           toValue: 150, 
  //           duration: 400
  //         }
  //       )
  //     ])
  //   ).start();

    


  }
  carregarGrafico(){
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimado,
        {
          toValue: 1, 
          duration: 400
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 300, 
          duration: 1000
        }
      )
    ]).start();
  }
  render(){
  return (
    <View style={{flex: 1,
    
    }}>

      <View style={{
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#4169E1'
      }}>
        <TouchableOpacity onPress={this.carregarGrafico}>
          <Text style={{
            fontSize: 25, 
            color: '#FFF'
          }}> Gerar Grafico</Text>
        </TouchableOpacity>

      </View>

      <View style={{
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
                
      }}> 

<Animated.View style={{width: this.state.LarAnimada,
       height: this.state.AltAnimada, 
       backgroundColor: '#FF0000',
        justifyContent: 'center',
        opacity: this.state.OpAnimado
        }}> 
     <Text style={{color:'#FFF', fontSize: 22, textAlign: 'center'}}>R$ 150,00</Text> 
     </Animated.View>
    

      </View>
     
      
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
