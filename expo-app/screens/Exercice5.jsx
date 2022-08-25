import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  fr: { welcome: 'Bonjour', name: 'Charlot' },
};
const i18n = new I18n(translations);

i18n.locale = Localization.locale;
i18n.enableFallback = true;

const Exercice5 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
      <Text>Langue actuelle: {Localization.locale}</Text>
    </View>
  )
}

export default Exercice5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 45,
      },
})