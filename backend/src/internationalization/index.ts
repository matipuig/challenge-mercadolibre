/**
 * This script has all the possible texts for internationalization.
 */

import { get as lodashGet } from 'lodash';

import CONSTANTS from '~/constants';
import resources from './resources';

const { DEFAULT_LANGUAGE } = CONSTANTS;

const availableLanguages = Object.keys(resources);
/**
 * Gets the text with the key specified (for example: "Error.hello.").
 * It looks for it in the specified language.
 * @param routeKey Key to look for.
 * @param language Language to get the text from.
 */
export const get = (routeKey: string, language: string = DEFAULT_LANGUAGE): string => {
  const lang = availableLanguages.includes(language) ? language : DEFAULT_LANGUAGE;
  const search = `${lang}.${routeKey}`;
  const arrSearch = search.split('.');
  return lodashGet(resources, arrSearch, routeKey);
};

export default { get };
