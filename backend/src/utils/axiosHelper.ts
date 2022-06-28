/**
 * Handles axios results to return them in a specified format. Otherwise, axios throws not 200 requests as errors.
 */

import { AxiosError, AxiosResponse } from 'axios';
import { pick } from 'lodash';

import { APIErrorResult, APISuccessResult } from '~/types/services/common';
import logger, { LABELS } from '~/utils/logger';

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
  logger.debug(`API consumed successfully.`, LABELS.API_CONSUMPTION, { requestInformation });
  return {
    success: true,
    code: response.status,
    payload: response.data,
  };
};

/**
 * Gets the axios response and returns it as an API expected result.
 * @param response Response sent by axios.
 */
export const handleError = (axiosError: AxiosError): APIErrorResult => {
  const requestInformation = getRequestInformation(axiosError);
  const responseInformation = pick(axiosError.response, ['status', 'data']);
  logger.debug(`API consumed with error.`, LABELS.API_CONSUMPTION, {
    requestInformation,
    responseInformation,
  });
  const response = axiosError.response as AxiosResponse;
  const code = response.status;
  const description = axiosError.message;
  return {
    code,
    description,
    success: false,
  };
};

export default { handleResult, handleError };
