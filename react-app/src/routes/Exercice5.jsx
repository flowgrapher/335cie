import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const translationEN = {welcome: 'Welcome!', language: 'Language', message: 'This is a text in English'};
const translationFR = {welcome: 'Bienvenue!', language: 'Langue', message: 'Ceci est un texte en français'};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default function Exercice5() {

  const { t } = useTranslation();
  const [lang, setLang] = React.useState('en');

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };


    return (
      <main class='bg-gray-200 p-4 justify-center'>
      <div class='container w-full max-w-xs'>
        <h2 class='text-center text-gray-500'>Exercice 5</h2>
        <div class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 p class='text-2xl mb-3'>{t('welcome')}</h1>
          <p class='mb-5'>{t('message')}</p>
          <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">{t('language')}</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={lang}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
    </main>
    );
  }