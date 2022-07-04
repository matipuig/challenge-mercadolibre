/**
 * Interacts with the backend.
 */

import axios, { AxiosError } from 'axios';

import { SERVER_CONFIG } from '~/config/server';
import { CONSTANTS } from '~/constants';
import { ItemResult, SearchParams, SearchResultWithCategories } from '~/types/services/backend';
import { handleError, handleResult } from '~/utils/axiosHelper';

const { BASE_URL, API_KEY } = SERVER_CONFIG.SERVICES.BACKEND;

const APIClient = axios.create({
  baseURL: BASE_URL,
  timeout: CONSTANTS.SERVICES.BACKEND.TIMEOUT_MS,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

const SEARCH_URL = '/api/items';
const GET_ITEM_URL = '/api/items/:id';

/**
 * Return the item data from the specified item. Returns null if this is not found.
 * @param id Id of the item to get information from.
 */
export const getItemById = async (id: string): Promise<ItemResult | null> => {
  try {
    const url = GET_ITEM_URL.replace(':id', id);
    const result = await APIClient.get<ItemResult>(url);
    const parsedResult = handleResult<ItemResult>(result);
    return parsedResult.payload;
  } catch (err) {
    const serviceError = handleError(err as AxiosError);
    if (serviceError.code === 404) {
      return null;
    }
    throw new Error(serviceError.description);
  }
};

/**
 * Executes a search in MeLi backend.
 * @param searchParams Params of the searched results.
 */
export const searchProductsByQuery = async (
  searchParams: SearchParams,
): Promise<SearchResultWithCategories> => {
  try {
    const result = await APIClient.get<SearchResultWithCategories>(SEARCH_URL, {
      params: searchParams,
    });
    const parsedResult = handleResult<SearchResultWithCategories>(result);
    return parsedResult.payload;
  } catch (err) {
    const serviceError = handleError(err as AxiosError);
    throw new Error(serviceError.description);
  }
};
