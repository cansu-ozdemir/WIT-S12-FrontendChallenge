import { createContext, useState, useEffect } from 'react';
import trData from '../data/tr.json';
import enData from '../data/en.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'tr';
});

const content = language === 'tr' ? trData : enData;

const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
};

useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);

  return (
    <LanguageContext.Provider value={{language, toggleLanguage, content}}>
      {children}
    </LanguageContext.Provider>
  );
};
