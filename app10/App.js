
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0)
    };


    Animated.parallel([
      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 300, 
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 200, 
          duration: 2000
        }
      )
    ]).start();


        Animated.sequence([
          Animated.timing(
            this.state.OpacidadeAnimada,
            {
              toValue: 1, 
              duration: 2000
            }
          ),
          Animated.parallel([
            Animated.timing(
              this.state.LarAnimada,
              {
                toValue: 300, 
                duration: 2000
              }
            ),
            Animated.timing(
              this.state.AltAnimada,
              {
                toValue: 200, 
                duration: 2000
              }
            )
          ]),
          Animated.timing(
            this.state.OpacidadeAnimada,
            {
              toValue: 0, 
              duration: 2000
            }
          )
      
     
      
    ]).start();


    


    // Animated.sequence([
    //   Animated.timing(
    //     this.state.LarAnimada,
    //     {
    //       toValue: 300, 
    //       duration: 2000
    //     }
    //   ),
    //   Animated.timing(
    //     this.state.AltAnimada,
    //     {
    //       toValue: 200, 
    //       duration: 2000
    //     }
    //   ),
    //   Animated.timing(
    //     this.state.OpacidadeAnimada,
    //     {
    //       toValue: 0, 
    //       duration: 2000
    //     }
    //   )
    // ]).start();

    // Animated.timing(
    //   this.state.LarAnimada, 
    //   {
    //     toValue: 300, 
    //     duration: 2000
    //   }
    // ).start();
  }
  render(){
  return (
    <View style={styles.container}>
     
     <Animated.View style={{width: this.state.LarAnimada,
       height: this.state.AltAnimada, 
       backgroundColor: '#4169E1',
        justifyContent: 'center',
        opacity: this.state.OpacidadeAnimada}}> 
     <Text style={{color:'#FFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text> 
     </Animated.View>
      
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
