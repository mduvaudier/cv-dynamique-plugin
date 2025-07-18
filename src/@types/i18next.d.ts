import translationFR from "../public/locales/fr/translation.json"

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: typeof translationFR
        };
    }
}