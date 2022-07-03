/**
 * Interacts with MercadoLibre APIs.
 */

import {
  getCategoryById,
  getItemById,
  getItemDescriptionById,
  searchProductsByQuery,
} from '../../../src/services/mercadoLibre';

import { mockedMELCategory } from '../__mocks__/MELI/category';
import { mockedMELIDescription } from '../__mocks__/MELI/description';
import { mockedMELIRawItem } from '../__mocks__/MELI/item';
import { mockedMELISearchResult } from '../__mocks__/MELI/searchResult';
import { MOCKED_DATA } from '../axiosMockAdapter';

const { itemId, categoryId } = MOCKED_DATA;

describe('MercadoLibre service', () => {
  it('should return categories.', async () => {
    const result = await getCategoryById(categoryId);
    expect(result).toEqual(mockedMELCategory);
  });

  it('should return descriptions.', async () => {
    const result = await getItemDescriptionById(itemId);
    expect(result).toEqual(mockedMELIDescription);
  });

  it('should return a detailed item.', async () => {
    const result = await getItemById(itemId);
    expect(result).toEqual(mockedMELIRawItem);
  });

  it('should return the search result.', async () => {
    const result = await searchProductsByQuery({ q: 'anything' });
    expect(result).toEqual(mockedMELISearchResult);
  });
});
