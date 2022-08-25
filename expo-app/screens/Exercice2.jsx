import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Exercice2() {
  const [isChecked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    'italy',
    'spain',
    'barcelona',
    'finland',
  ]);
  const [items, setItems] = useState([
    { label: 'Spain', value: 'spain' },
    { label: 'Madrid', value: 'madrid', parent: 'spain' },
    { label: 'Barcelona', value: 'barcelona', parent: 'spain' },

    { label: 'Italy', value: 'italy' },
    { label: 'Rome', value: 'rome', parent: 'italy' },

    { label: 'Finland', value: 'finland' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Du Texte</Text>
      </View>
      <View style={styles.section}>
        <TextInput style={styles.input} placeholder='Saisir du texte' />
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme='DARK'
          multiple={true}
          mode='BADGE'
          badgeDotColors={[
            '#e76f51',
            '#00b4d8',
            '#e9c46a',
            '#e76f51',
            '#8ac926',
            '#00b4d8',
            '#e9c46a',
          ]}
        />
      </View>
      <View style={styles.section}>
        <TextInput
          style={[styles.input, { borderColor: 'red', borderWidth: 1 }]}
          placeholder='Multiligne'
          multiline
          numberOfLines={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
