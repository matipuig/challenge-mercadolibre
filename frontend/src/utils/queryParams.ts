/**
 * Contains some useful functions to work with query params.
 */

import { ParsedUrlQuery } from 'querystring';

import { isArray, isUndefined } from 'lodash';

/**
 * Returns the text being URL friendly.
 * @param string String to make query friendly.
 */
export const getURLFriendlyString = (string: string): string => {
  const spacesReplaced = string.replace(/\s+/gim, ' ');
  const normalizedText = spacesReplaced.normalize('NFD');
  const noSpecialCharsText = normalizedText.replace(/[^a-zA-Z0-9 ]/g, '');
  const noSpacesText = noSpecialCharsText.replace(/\s+/g, '-');
  const urlParams = new URLSearchParams();
  urlParams.set('friendly', noSpacesText);
  return urlParams.toString().replace('friendly=', '');
};

/**
 * Returns the searched query param by its name or undefined.
 * @param query Query received.
 * @param queryParamName Name of the query param.
 */
export const getQueryParamValue = (
  query: ParsedUrlQuery,
  queryParamName: string,
): string | undefined => {
  const queryParamValue = query[queryParamName];
  if (isArray(queryParamValue)) {
    return queryParamValue[0];
  }
  return queryParamValue;
};

/**
 * Returns the searched query params as a positive integer.
 * @param query Query received.
 * @param queryParamName Name of the query param.
 */
export const getQueryParamValueAsPositiveInteger = (
  query: ParsedUrlQuery,
  queryParam: string,
): number | undefined => {
  const queryParamValue = getQueryParamValue(query, queryParam);
  if (isUndefined(queryParamValue)) {
    return undefined;
  }
  if (!/^[0-9]+$/.test(queryParamValue)) {
    return undefined;
  }
  return Number.parseInt(queryParamValue, 10);
};
