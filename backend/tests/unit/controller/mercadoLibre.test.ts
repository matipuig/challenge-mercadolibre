/**
 * Executes products search unit testing in MercadoLibre.
 */

import { getItemById, getItemsBySearch } from '../../../src/controller/mercadoLibre';
import { MOCKED_DATA } from '../axiosMockAdapter';
import { mockedParsedItemResult } from '../__mocks__/parsed/detailedItem';
import { mockedParsedSearchResult } from '../__mocks__/parsed/searchResult';

const { itemId } = MOCKED_DATA;

describe('MercadoLibre controller', () => {
  it('should return item detail parsed correctly.', async () => {
    const result = await getItemById(itemId);
    expect(result).toEqual(mockedParsedItemResult);
  });

  it('should searchs result parsed correctly.', async () => {
    const result = await getItemsBySearch({ q: 'anything' });
    expect(result).toEqual(mockedParsedSearchResult);
  });
});
