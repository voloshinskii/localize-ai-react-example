import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import enLocale from './locales/en.json';
import ruLocale from './locales/ru.json';
import ukLocale from './locales/uk.json';
import kaLocale from './locales/ka.json';
import jaLocale from './locales/ja.json';
import itLocale from './locales/it.json';
import esLocale from './locales/es.json';
import deLocale from './locales/de.json';
import frLocale from './locales/fr.json';
import ptLocale from './locales/pt.json';
import plLocale from './locales/pl.json';

export const locales = {
    en: enLocale,
    ru: ruLocale,
    uk: ukLocale,
    ka: kaLocale,
    ja: jaLocale,
    it: itLocale,
    es: esLocale,
    de: deLocale,
    fr: frLocale,
    pt: ptLocale,
    pl: plLocale,
}

i18next
    .use(initReactI18next)
    .init({
    lng: 'en',
    debug: true,
    resources: locales,
    fallbackLng: 'en'
});

export function updateLanguage(language) {
    i18next.changeLanguage(language);
}

export default i18next;
