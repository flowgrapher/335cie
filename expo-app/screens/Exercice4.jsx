import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Exercice4 = ({navigation}) => {
const [nom, setNom] = React.useState('')
  return (
    <View style={styles.container}>
      <Text>Veuillez entrer votre nom: {nom} </Text>
      <TextInput style={styles.input} placeholder="Nom et prénom" onChangeText={(value) => setNom(value)} />
      <Button title="Envoyer" onPress={() => navigation.navigate('Profil', {
              user: nom,
            })} />
    </View>
  )
}

export default Exercice4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 45,
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginVertical: 20,
      },
})