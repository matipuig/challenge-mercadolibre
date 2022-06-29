/**
 * Contains MercadoLibre common functions.
 */

import { isNull, pick } from 'lodash';
import CONSTANTS from '~/constants';
import mercadoLibreService from '~/services/mercadoLibre';
import { Price, Author, Item, ItemCategory, SellerAddress } from '~/types/MercadoLibre';
import { MELIRawItem } from '~/types/services/MercadoLibre/Item';
import { MELISearchProductResult } from '~/types/services/MercadoLibre/SearchResult';

const { NAME, LAST_NAME } = CONSTANTS.AUTHOR;

type MELIItemResult = MELIRawItem | MELISearchProductResult;

/**
 * Extracts the required information from the service product.
 * @param product Service result to get the information from.
 */
export const extractInformationFromProductResult = (product: MELIItemResult): Item => {
  const { id, title, seller_address, condition, shipping, thumbnail } = product;
  const price = getPriceInformation(product);
  return {
    id,
    title,
    price,
    condition,
    picture: thumbnail,
    free_shipping: shipping.free_shipping,
    seller_address: pick(seller_address, ['state', 'country', 'city']) as SellerAddress,
  };
};

/**
 * Returns the author of the app.
 */
export const getAuthor = (): Author => {
  return {
    name: NAME,
    lastname: LAST_NAME,
  };
};

/**
 * Returns the category breadcrumb by its ID.
 * @param id Id of the category.
 */
export const getCategoryBreadcrumb = async (id: string): Promise<ItemCategory[]> => {
  try {
    const category = await mercadoLibreService.getCategoryById(id);
    if (isNull(category)) {
      return [];
    }
    return category.path_from_root;
  } catch (error) {
    throw error;
  }
};

/**
 * Returns the price information from the service result.
 * @param product Service result to get the price from.
 */
export const getPriceInformation = (product: MELIItemResult): Price => {
  const { price, currency_id } = product;
  let stringPrice = price.toString();
  if (!stringPrice.includes('.')) {
    stringPrice = `${stringPrice}.00`;
  }
  const [amount, decimals] = stringPrice.split('.').map((e) => Number.parseInt(e, 10));
  return { currency: currency_id, amount, decimals };
};

export default {
  extractInformationFromProductResult,
  getAuthor,
  getCategoryBreadcrumb,
  getPriceInformation,
};
