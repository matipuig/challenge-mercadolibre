/**
 * Interacts with backend APIs.
 */

import { getItemById, searchProductsByQuery } from '../../../src/services/backend';
import { silenceLogger } from '../../utils';
import { mockedDetailedItem } from '../__mocks__/backend/detailedItem';
import { mockedSearchResults } from '../__mocks__/backend/searchResult';
import { MOCKED_DATA } from '../axiosMockAdapter';

const { itemId } = MOCKED_DATA;

describe('Backend service', () => {
  beforeEach(() => silenceLogger());

  it('should return search correctly.', async () => {
    const result = await searchProductsByQuery({ q: 'anything' });
    expect(result).toEqual(mockedSearchResults);
  });

  it('should return detailed item.', async () => {
    const result = await getItemById(itemId);
    expect(result).toEqual(mockedDetailedItem);
  });
});
