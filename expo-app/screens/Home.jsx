import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
const [nom, setNom] = React.useState('')
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Ex1')} style={styles.textBtn}>Exercice 1</Text>
      <Text onPress={() => navigation.navigate('Ex2')} style={styles.textBtn}>Exercice 2</Text>
      <Text onPress={() => navigation.navigate('Ex3')} style={styles.textBtn}>Exercice 3</Text>
      <Text onPress={() => navigation.navigate('Ex4')} style={styles.textBtn}>Exercice 4</Text>
      <Text onPress={() => navigation.navigate('Ex5')} style={styles.textBtn}>Exercice 5</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 45,
        backgroundColor: '#edede9',
      },
      textBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#d6ccc2',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginVertical: 20,
        borderRadius:10
      },
})