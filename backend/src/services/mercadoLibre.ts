/**
 * Interacts with MercadoLibre APIs.
 */

import axios, { AxiosError } from 'axios';

import CONSTANTS from '~/constants';
import { CodedError, CODES } from '~/errors';
import { handleError, handleResult } from '~/utils/axiosHelper';
import { MELISeachByQueryResults } from '~/types/services/MercadoLibre/SearchResult';
import { MELIItemDescription, MELIRawItem } from '~/types/services/MercadoLibre/Item';
import { SearchParams } from '~/types/MercadoLibre';

const { BASE_URL, TIMEOUT_MS } = CONSTANTS.SERVICES.MERCADO_LIBRE;

const APIClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT_MS,
});

const GET_ITEM_URL = '/items/:id';
const GET_ITEM_DESCRIPTION_URL = '/items/:id/description';
const SEARCH_ITEMS_URL = '/sites/MLA/search';

/**
 * Return the item data from the specified item.
 * @param id Id of the item to get information from.
 */
export const getItemById = async (id: string): Promise<MELIRawItem> => {
  try {
    const url = GET_ITEM_URL.replace(':id', id);
    const result = await APIClient.get<MELIRawItem>(url);
    const parsedResult = handleResult<MELIRawItem>(result);
    return parsedResult.payload;
  } catch (err) {
    const serviceError = handleError(err as AxiosError);
    throw new CodedError(CODES.SERVICE_MERCADO_LIBRE_ITEM_ERROR, { serviceError });
  }
};

/**
 * Return the item description from the specified id.
 * @param id Id of the item to get description from.
 */
export const getItemDescriptionById = async (id: string): Promise<MELIItemDescription> => {
  try {
    const url = GET_ITEM_DESCRIPTION_URL.replace(':id', id);
    const result = await APIClient.get<MELIItemDescription>(url);
    const parsedResult = handleResult<MELIItemDescription>(result);
    return parsedResult.payload;
  } catch (err) {
    const serviceError = handleError(err as AxiosError);
    throw new CodedError(CODES.SERVICE_MERCADO_LIBRE_ITEM_DESCRIPTION_ERROR, { serviceError });
  }
};

/**
 * Executes a search in MeLi API.
 * @param searchParams Params of the searched results.
 */
export const searchProductsByQuery = async (
  searchParams: SearchParams,
): Promise<MELISeachByQueryResults> => {
  try {
    const result = await APIClient.get<MELISeachByQueryResults>(SEARCH_ITEMS_URL, {
      params: searchParams,
    });
    const parsedResult = handleResult<MELISeachByQueryResults>(result);
    return parsedResult.payload;
  } catch (err) {
    const serviceError = handleError(err as AxiosError);
    throw new CodedError(CODES.SERVICE_MERCADO_LIBRE_SEARCH_ERROR, { serviceError });
  }
};

export default { getItemById, getItemDescriptionById, searchProductsByQuery };
