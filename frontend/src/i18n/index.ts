/**
 * This file has the support for the internationalization.
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { PUBLIC_CONFIG } from '~/config/public';

import { en } from './en';
import { es } from './es';

export type Translations = typeof es | typeof en;

const { LANGUAGE } = PUBLIC_CONFIG;

export const resources = {
  es: { ...es },
  en: { ...en },
};

export const getAvailableLanguages = (): string[] => {
  const availableLanguages = Object.keys(resources);
  if (!availableLanguages.includes(LANGUAGE)) {
    const languagesList = availableLanguages.join('" , "');
    throw new Error(
      `The setted language "${LANGUAGE}" is not valid. The available languages are "${languagesList}".`,
    );
  }
  return availableLanguages;
};
getAvailableLanguages();

i18next.use(initReactI18next).init({
  lng: LANGUAGE,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
  supportedLngs: Object.keys(resources),
});

/**
 * Contains "t" function from i18n.
 */
export const { t } = i18next;

/**
 * Returns the available texts  by the language for translations.
 */
export const getAvailableI18nTexts = (): Translations =>
  i18next.getDataByLanguage(LANGUAGE) as unknown as Translations;

export const i18n = i18next;

export default { i18n, t, getAvailableI18nTexts, getAvailableLanguages };
