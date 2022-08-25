import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';


const Exercice1 = ({navigation}) => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableOpacity onPress={() => increment()} style={styles.btn}>
        <Text>Clic moi</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 22 }}>Vous avez cliqué {count} fois</Text>
      <TouchableOpacity onPress={() => decrement()} style={styles.btn}>
        <Text>Clic moi aussi</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Exercice1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 45,
  },
  btn: {
    backgroundColor: '#d6ccc2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
})