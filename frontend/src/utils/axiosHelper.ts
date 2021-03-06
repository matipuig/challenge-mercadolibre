/**
 * Handles axios results to return them in a specified format. Otherwise, axios throws not 200 requests as errors.
 */

import { AxiosError, AxiosResponse } from 'axios';
import { isUndefined, pick } from 'lodash';

import { APIErrorResult, APISuccessResult } from '~/types/services/common';
import { logger, LABELS } from '~/utils/logger';

const getRequestInformation = (
  axiosResponse: AxiosResponse | AxiosError,
): Record<string, unknown> => {
  const { config } = axiosResponse;
  return pick(config, ['baseURL', 'method', 'params', 'timeout', 'url']);
};

/**
 * Gets the axios response and returns it as an API expected result.
 * @param response Response sent by axios.
 */
export const handleResult = <Payload>(response: AxiosResponse): APISuccessResult<Payload> => {
  const requestInformation = getRequestInformation(response);
  logger.debug(`API consumed successfully.`, LABELS.SERVICE_CONSUMPTION, { requestInformation });
  return {
    success: true,
    code: response.status,
    payload: response.data,
  };
};

/**
 * Gets the axios response and returns it as an API expected result. Returns error -1 if there is no response (proabbly network error)
 * @param axiosError Axios error response.
 */
export const handleError = (axiosError: AxiosError): APIErrorResult => {
  const requestInformation = getRequestInformation(axiosError);
  const responseInformation = pick(axiosError.response, ['status', 'data']);
  logger.debug(`API consumed with error.`, LABELS.SERVICE_CONSUMPTION, {
    requestInformation,
    responseInformation,
  });
  const response = axiosError.response as AxiosResponse;
  const description = axiosError.message;
  if (isUndefined(response)) {
    return {
      code: -1,
      description,
      success: false,
    };
  }
  const code = response.status;
  return {
    code,
    description,
    success: false,
  };
};
