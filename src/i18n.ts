import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    load: 'languageOnly',
    backend: {
      loadPath: "/wp-content/plugins/cv-dynamique-plugin/build/locales/{{lng}}/translation.json"
    },
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
