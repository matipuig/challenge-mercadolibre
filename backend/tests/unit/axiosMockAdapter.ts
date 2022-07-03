/**
 * Mocks axios.
 */

import mockAdapter from 'axios-mock-adapter';

import { CONSTANTS } from '../../src/constants';
import {
  APIClient,
  GET_CATEGORY_URL,
  GET_ITEM_DESCRIPTION_URL,
  GET_ITEM_URL,
  SEARCH_ITEMS_URL,
} from '../../src/services/mercadoLibre';
import { mockedMELCategory } from './__mocks__/MELI/category';
import { mockedMELIDescription } from './__mocks__/MELI/description';
import { mockedMELIRawItem } from './__mocks__/MELI/item';
import { mockedMELISearchResult } from './__mocks__/MELI/searchResult';

const { ROUTES } = CONSTANTS;
const {} = ROUTES;

const itemId = mockedMELIRawItem.id;
const categoryId = mockedMELIRawItem.category_id;

export const MOCKED_DATA = {
  categoryId,
  itemId,
  urls: {
    SEARCH_ITEMS_URL,
    GET_CATEGORY_URL: GET_CATEGORY_URL.replace(':id', categoryId),
    GET_ITEM_DESCRIPTION_URL: GET_ITEM_DESCRIPTION_URL.replace(':id', itemId),
    GET_ITEM_URL: GET_ITEM_URL.replace(':id', itemId),
  },
};

const { urls } = MOCKED_DATA;
const mock = new mockAdapter(APIClient);
mock.onGet(urls.SEARCH_ITEMS_URL).reply(200, mockedMELISearchResult);
mock.onGet(urls.GET_ITEM_DESCRIPTION_URL).reply(200, mockedMELIDescription);
mock.onGet(urls.GET_CATEGORY_URL).reply(200, mockedMELCategory);
mock.onGet(urls.GET_ITEM_URL).reply(200, mockedMELIRawItem);

/**
 * Gets the mock adapter.
 * */
export const getAxiosMockAdapter = () => mockAdapter;

export default mockAdapter;
