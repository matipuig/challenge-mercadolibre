/**
 * Mocks axios.
 */

import MockAdapter from 'axios-mock-adapter';

import { APIClient, SEARCH_URL, GET_ITEM_URL } from '../../src/services/backend';
import { preventSetImmediateError } from '../utils';
import { mockedDetailedItem } from './__mocks__/backend/detailedItem';
import { mockedSearchResults } from './__mocks__/backend/searchResult';

const itemId = mockedDetailedItem.item.id;

export const MOCKED_DATA = {
  itemId,
  urls: {
    SEARCH_URL,
    GET_ITEM_URL: GET_ITEM_URL.replace(':id', itemId),
  },
};

preventSetImmediateError();

const { urls } = MOCKED_DATA;
const mockAdapter = new MockAdapter(APIClient);
mockAdapter.onGet(urls.SEARCH_URL).reply(200, mockedSearchResults);
mockAdapter.onGet(urls.GET_ITEM_URL).reply(200, mockedDetailedItem);

/**
 * Gets the mock adapter.
 * */
export const getAxiosMockAdapter = () => mockAdapter;
