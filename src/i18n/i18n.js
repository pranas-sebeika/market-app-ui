import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.json'
import lt from './translations/lt.json'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            lt: lt
        },
        load: "languageOnly",
        fallbackLng: "lt",
        whitelist: ['lt', 'en'],
        react: {
            wait: true
        }
    });
