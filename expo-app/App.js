import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Exercice1 from './screens/Exercice1';
import Exercice2 from './screens/Exercice2';
import Exercice3 from './screens/Exercice3';
import Exercice4 from './screens/Exercice4';
import Profil from './screens/Profil';
import Exercice5 from './screens/Exercice5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        defaultScreenOptions={Home}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d5bdaf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'CIE 335',
          }}
        />
        <Stack.Screen
          name='Ex1'
          component={Exercice1}
          options={{ title: 'Exercice 1' }}
        />
        <Stack.Screen
          name='Ex2'
          component={Exercice2}
          options={{ title: 'Exercice 2' }}
        />
        <Stack.Screen
          name='Ex3'
          component={Exercice3}
          options={{ title: 'Exercice 3' }}
        />
        <Stack.Screen
          name='Ex4'
          component={Exercice4}
          options={{ title: 'Exercice 4' }}
        />
        <Stack.Screen
          name='Profil'
          component={Profil}
          options={{ title: 'Votre profil' }}
        />
        <Stack.Screen
          name='Ex5'
          component={Exercice5}
          options={{ title: 'Exercice 5' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
});
