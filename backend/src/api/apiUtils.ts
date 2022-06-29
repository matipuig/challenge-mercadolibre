/**
 * Has some needed utilites for the API layer.
 */

import { Request, Response, NextFunction } from 'express';
import { noop, isString, isArray, pick, isObject } from 'lodash';

import { CodedError, CODES, CODES as ERROR_CODES } from '~/errors';
import i18n from '~/internationalization';
import { logger, LABELS } from '~/utils/logger';
import { APIErrorResponse } from '~/types/APIResults';
import CONFIG from '~/config';

/**
 * Choose the response code by the error code.
 * @param error Error received.
 */
const chooseResponseCodeByError = (error: CodedError): number => {
  let errorCode: number;
  switch (error.code) {
    case ERROR_CODES.API_INVALID_PARAMS:
      errorCode = 400;
      break;
    case ERROR_CODES.API_NOT_AUTHORIZED:
      errorCode = 401;
      break;
    case ERROR_CODES.API_METHOD_NOT_FOUND:
      errorCode = 404;
      break;
    case ERROR_CODES.API_REQUESTS_TOO_OFTEN:
      errorCode = 429;
      break;
    case ERROR_CODES.NOT_DEFINED:
      errorCode = 500;
      break;
    default:
      errorCode = 500;
  }
  return errorCode;
};

/**
 * Gets the language from the request.
 * @param req Request object from Express.
 */
export const getLanguageFromRequest = (req: Request): string | undefined => {
  if (!isObject(req.headers)) {
    return undefined;
  }
  const header: string = req.headers['accept-language'] || '';
  const arrHeader = header.split(/(-|_)/);
  const lang = arrHeader.shift() || '';
  if (lang.trim() === '') {
    return undefined;
  }
  return lang;
};

/**
 * Logs the request IP.
 * @param req  Request from express.
 * @param res Response from express.
 * @param next Next function from express.
 */
export const logIP = (req: Request, res: Response, next: NextFunction): void => {
  noop(res);
  const { baseUrl, url, method } = req;
  const headerForwarded = req.headers['x-forwarded-for'];
  const isForwarded = isString(headerForwarded);
  let ip;
  if (isForwarded) {
    const arrHeader = isArray(headerForwarded) ? headerForwarded[0] : headerForwarded || '';
    ip = arrHeader.split(',')[0];
  }
  ip = ip || req.connection.remoteAddress || req.socket.remoteAddress || req.ip;
  logger.http('IPS', LABELS.HTTP_REQUEST, { ip, method, baseUrl, url });
  next();
};

/**
 * 	Sends the error with the specified code.
 * @param req Request object from Express.
 * @param res Response object from Express.
 * @param error Error to be sent to the user.
 * @param code HTTP status code for the response.
 * @param askReload If it should send "reload:true" or false to the user.
 */
export const sendError = (req: Request, res: Response, error: CodedError, code = 500): void => {
  noop(req);
  const language = getLanguageFromRequest(req);
  const message = i18n.get(`Error.${error.code}`, language);
  const response: APIErrorResponse = {
    code,
    message,
    error: error.code,
    success: false,
  };
  res.statusCode = code;
  res.json(response);
};

/**
 * Sends the response with the specified code to the 200.
 * @param res Response object from express.
 * @param payload Whatever you want to send to the user.
 * @param code Status code the user will receive.
 */
export const sendResponse = (res: Response, payload: unknown, code = 200): void => {
  res.statusCode = code;
  res.json(payload);
};

/**
 * Rejects the request if the same is not authorized.
 * @param req Request that sent the possible not authorized request.
 * @param res Response to the client.
 * @param next Next function to be executed in express.
 */
export const rejectIfNotAuthorized = (req: Request, res: Response, next: NextFunction): void => {
  noop(res);
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== CONFIG.AUTH.API_KEY) {
    const notAuthorizedError = new CodedError(CODES.API_NOT_AUTHORIZED);
    next(notAuthorizedError);
    return;
  }
  next();
};

/**
 * Send that the specified method was not found.
 * @param req Request that sent the incorrect method.
 * @param res Response that will send error to the client.
 * @param next Next function to be executed in express.
 */
export const sendMethodNotFoundError = (req: Request, res: Response, next: NextFunction): void => {
  noop([res, req]);
  const error = new CodedError(CODES.API_METHOD_NOT_FOUND);
  next(error);
};

/**
 * Handles the error ocurred in the API.
 * @param err Error to be thrown.
 * @param req Request that received the error.
 * @param res Response that will send error to the client.
 * @param next Next function to be executed in express.
 */
export const handleError = (
  error: CodedError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  noop(next);
  // Delete authorizatoin in order not to be shown in logs.
  delete req.headers['X-API-KEY'];
  delete req.headers['x-api-key'];
  const errorCode = chooseResponseCodeByError(error);
  const requestData = pick(req, [
    'method',
    'baseUrl',
    'url',
    'originalUrl',
    'params',
    'query',
    'headers',
  ]);
  logger.error(error.code, LABELS.API, { error: error, request: requestData });
  sendError(req, res, error, errorCode);
};

export default {
  logIP,
  getLanguageFromRequest,
  sendError,
  sendResponse,
  rejectIfNotAuthorized,
  sendMethodNotFoundError,
  handleError,
};
