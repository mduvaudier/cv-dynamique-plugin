import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // charge les fichiers depuis /public/locales
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // langue par défaut
    backend: {
      loadPath: "/wp-content/plugins/cv-dynamique-plugin/build/locales/{{lng}}/translation.json"
    },
    interpolation: {
      escapeValue: false // React gère déjà l'échappement
    }
  });

export default i18n;
