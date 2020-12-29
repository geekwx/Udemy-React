
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>GeekWx</Text>
      <FontAwesome
      name='ufo'
      size={35}
      color="#11118c"
      />


<FontAwesome
      name='home'
      size={25}
      color="#54a300"
      />



<Feather
      name='home'
      size={25}
      color="#54a300"
      />

<Feather
      name='key'
      size={25}
      color="#54a300"
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome 
        name="youtube"
        size={35}
        color="#FFF"
        />
        <Text style={styles.btnText}> Youtube</Text>
      </TouchableOpacity>

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
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5
  },
  btnText: {
    paddingLeft: 10, 
    color: '#FFF',
    
  }
});
