/**
 * Facade to execute MercadoLibre controller main functions.
 */

import { getItemById as importedGetItemById } from './items';
import { getItemsBySearch as importedGetItemsBySearch } from './search';

export const getItemById = importedGetItemById;
export const getItemsBySearch = importedGetItemsBySearch;

export default { getItemById, getItemsBySearch };
