import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

void i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,

  interpolation: {
    escapeValue: false, // Not needed for react as it escapes by default
  },
  resources: { ru: { translations: {} } },
});

export default i18n;
