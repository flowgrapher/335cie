import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profil = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text>Bonjour et bienvenue
                <Text style={{ fontWeight: 'bold' }}>{route.params.user}</Text>!
            </Text>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 45,
    },
})