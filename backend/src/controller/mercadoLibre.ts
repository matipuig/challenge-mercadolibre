/**
 * Interacts with MercadoLibre.
 */

import { isUndefined } from 'lodash';
import CONSTANTS from '~/constants';
import mercadoLibreService from '~/services/mercadoLibre';
import {
  SearchParams,
  SearchResultWithCategories,
  Price,
  Author,
  Item,
  DetailedItem,
  ItemResult,
} from '~/types/MercadoLibre';
import { MELIRawItem } from '~/types/services/MercadoLibre/Item';
import { Filter, MELISearchProductResult } from '~/types/services/MercadoLibre/SearchResult';

const { NAME, LAST_NAME } = CONSTANTS.AUTHOR;

type MELIItemResult = MELIRawItem | MELISearchProductResult;

const getAuthor = (): Author => {
  return {
    name: NAME,
    lastname: LAST_NAME,
  };
};

const getPriceInformation = (product: MELIItemResult): Price => {
  const { price, currency_id } = product;
  let stringPrice = price.toString();
  if (!stringPrice.includes('.')) {
    stringPrice = `${stringPrice}.00`;
  }
  const [amount, decimals] = stringPrice.split('.').map((e) => Number.parseInt(e, 10));
  return { currency: currency_id, amount, decimals };
};

const extractInformationFromProductResult = (product: MELIItemResult): Item => {
  const { id, title, condition, shipping, thumbnail } = product;
  const price = getPriceInformation(product);
  return {
    id,
    title,
    price,
    picture: thumbnail,
    condition,
    free_shipping: shipping.free_shipping,
  };
};

const getCategoriesFromProductResult = (filters: Filter[]): string[] => {
  const categoryFilters = filters.find((e) => e.id === 'category');
  if (isUndefined(categoryFilters)) {
    return [];
  }
  if (categoryFilters.values.length === 0) {
    return [];
  }
  const firstFilter = categoryFilters.values[0];
  const pathFromRoot = firstFilter.path_from_root;
  if (isUndefined(pathFromRoot)) {
    return [];
  }
  return pathFromRoot.map((e) => e.name);
};

const getItemDescription = async (id: string): Promise<string> => {
  try {
    const descriptionResult = await mercadoLibreService.getItemDescriptionById(id);
    return descriptionResult.plain_text;
  } catch (error) {
    throw error;
  }
};

/**
 * Executes a search in MeLi API and returns the results.
 * @param searchParams Params of the searched results.
 */
export const getItemsBySearch = async (
  searchParams: SearchParams,
): Promise<SearchResultWithCategories> => {
  try {
    const author = getAuthor();
    const searchResult = await mercadoLibreService.searchProductsByQuery(searchParams);
    const items = searchResult.results.map(extractInformationFromProductResult);
    const categories = getCategoriesFromProductResult(searchResult.filters);
    return { author, categories, items };
  } catch (error) {
    throw error;
  }
};

/**
 * Returns the item information from a specific ID.
 * @param id ID of the item.
 */
export const getItemById = async (id: string): Promise<ItemResult> => {
  try {
    const author = getAuthor();
    const itemDataPromise = mercadoLibreService.getItemById(id);
    const itemDescriptionPromise = getItemDescription(id);
    const [serviceItem, description] = await Promise.all([itemDataPromise, itemDescriptionPromise]);
    const item = extractInformationFromProductResult(serviceItem);
    const { sold_quantity } = serviceItem;
    const detailedItem: DetailedItem = { ...item, description, sold_quantity };
    return {
      author,
      item: detailedItem,
    };
  } catch (error) {
    throw error;
  }
};

export default { getItemsBySearch, getItemById };
