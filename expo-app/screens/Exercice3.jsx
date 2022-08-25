import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';


const Exercice3 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>
                Disposition Horizontale :{' '}
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                <Text>Texte</Text>
                <Button title='Ajouter' style={styles.btn} />
                <Button title='Modifier' style={styles.btn} />
                <Button title='Supprimer' style={styles.btn} />
                <TextInput style={styles.input} />
            </View>

            <Text style={{ fontSize: 24, marginVertical: 20 }}>
                Disposition Verticale :
            </Text>

            <View
                style={{
                    flexDirection: 'column',
                    borderColor: '#000',
                    borderWidth: 1,
                }}
            >
                <Text>Texte</Text>
                <Button title='Ajouter' style={styles.btn} />
                <Button title='Modifier' style={styles.btn} />
                <Button title='Supprimer' style={styles.btn} />
                <TextInput style={styles.input} />
            </View>
        </View>
    )
}

export default Exercice3

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
      },
    btn: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
})