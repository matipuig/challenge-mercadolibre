/**
 * This file has the support for the internationalization.
 */

import i18next from 'i18next';
import { isArray } from 'lodash';
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
 * Replaces the i18n texts using the specified array.
 * @param translatedText Text to replace with.
 * @param replacements Texts to insert into the replacements.
 */
export const i18nReplace = (
  translatedText: string,
  replacements: number | string | (string | number)[],
): string => {
  const arrReplacements = isArray(replacements) ? replacements : [replacements];
  const strReplacements = arrReplacements.map((e) => e.toString());
  let replacedText = translatedText;
  strReplacements.forEach((replacement) => {
    replacedText = replacedText.replace('[?]', replacement);
  });
  return replacedText;
};

/**
 * Returns the available texts  by the language for translations.
 */
export const getAvailableI18nTexts = (): Translations =>
  i18next.getDataByLanguage(LANGUAGE) as unknown as Translations;

export const i18n = i18next;

export default { i18n, t, getAvailableI18nTexts, getAvailableLanguages };
