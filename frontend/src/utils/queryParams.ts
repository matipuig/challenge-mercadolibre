/**
 * Contains some useful functions to work with query params.
 */

import { ParsedUrlQuery } from 'querystring';

import { isArray, isUndefined } from 'lodash';

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
