import React, { useContext } from 'react';
import { LanguageContext } from './languageContext';

const Languages = {
	en: { CURRENT_LANGUAGE: 'Current language is ENGLISH ' },
	it: { CURRENT_LANGUAGE: 'La lingua selezionata è ITALIANO ' }
};

export function DisplayLanguage(){
    const language = useContext(LanguageContext)
    return (
          <h1>{Languages[language].CURRENT_LANGUAGE}</h1>
    )
}