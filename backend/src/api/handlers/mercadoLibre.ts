/**
 * Handles the Mercado Libre API requests.
 */
import { Request, Response, NextFunction } from 'express';
import { isNull, isUndefined } from 'lodash';

import { sendResponse, sendError } from '~/api/apiUtils';
import { getItemById, getItemsBySearch } from '~/controller/mercadoLibre';
import { CodedError, CODES } from '~/errors';
import { SearchParams } from '~/types/MercadoLibre';

const MERCADO_LIBRE_SEARCH_MAX_LIMIT = 50;

const getQueryParamAsStringOrUndefined = (req: Request, queryParam: string): string | undefined => {
  const queryParamValue = req.query[queryParam];
  if (isUndefined(queryParamValue)) {
    return undefined;
  }
  return queryParamValue.toString();
};

const isPositiveInteger = (value: string | undefined): boolean => {
  if (isUndefined(value)) {
    return false;
  }
  return /^[0-9]+$/.test(value);
};

const getValidatedSearchParams = (req: Request): SearchParams => {
  const searchParams = {
    q: getQueryParamAsStringOrUndefined(req, 'q'),
    limit: getQueryParamAsStringOrUndefined(req, 'limit'),
    offset: getQueryParamAsStringOrUndefined(req, 'offset'),
    category: getQueryParamAsStringOrUndefined(req, 'category'),
  };
  const invalidParamsError = new CodedError(CODES.API_INVALID_PARAMS, { searchParams });
  const { limit, offset } = searchParams;
  if (!isUndefined(offset) && !isPositiveInteger(offset)) {
    throw invalidParamsError;
  }
  if (isUndefined(limit)) {
    return searchParams;
  }
  if (!isPositiveInteger(limit)) {
    throw invalidParamsError;
  }
  const parsedLimit = Number.parseInt(limit, 10);
  if (parsedLimit > MERCADO_LIBRE_SEARCH_MAX_LIMIT) {
    throw invalidParamsError;
  }
  return searchParams;
};

/**
 * Executes a search by the specified params.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next next Express NextFunction object.
 */
export const searchByParams = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let result;
  try {
    const searchParams = getValidatedSearchParams(req);
    result = await getItemsBySearch(searchParams);
    sendResponse(res, result);
    return;
  } catch (error) {
    next(error);
  }
};

/**
 * Gets the detaild item by its id.
 * @param req Express Request object.
 * @param res Express Response object.
 * @param next next Express NextFunction object.
 */
export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let result;
  try {
    const { id } = req.params;
    result = await getItemById(id);
    if (isNull(result)) {
      const error = new CodedError(CODES.SERVICE_MERCADO_LIBRE_ITEM_NOT_FOUND, { id });
      sendError(req, res, error, 404);
      return;
    }
    sendResponse(res, result);
    return;
  } catch (error) {
    next(error);
  }
};
