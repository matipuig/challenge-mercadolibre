/**
 * This file has the support for the internationalization.
 */

import i18next from 'i18next';
import { isUndefined } from 'lodash';
import { initReactI18next } from 'react-i18next';

import { CONSTANTS } from '~/constants';

import { es } from './es';

const { DEFAULT_LANGUAGE } = CONSTANTS;

type Translations = typeof es;

const resources = {
  es: {
    translation: { ...es },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  initImmediate: true,
  interpolation: {
    escapeValue: false,
  },
});

/**
 * Contains "t" function from i18n.
 */
export const { t } = i18next;

/**
 * Returns the available texts  by the language for translations.
 */
export const getAvailableI18nTexts = (): Translations => {
  // TODO: CHOOSE LANGUAGE HERE.
  const language = DEFAULT_LANGUAGE;
  const avilableTranslations = i18next.getDataByLanguage(language);
  if (!isUndefined(avilableTranslations)) {
    return avilableTranslations.translation as unknown as Translations;
  }
  const defaultTranslations = i18next.getDataByLanguage(DEFAULT_LANGUAGE);
  if (isUndefined(defaultTranslations)) {
    throw new Error('Default translations are not set!!');
  }
  return defaultTranslations.translation as unknown as Translations;
};

export const i18n = i18next;

export default { i18n, t, getAvailableI18nTexts };
