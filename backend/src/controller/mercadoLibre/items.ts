/**
 * Get specific information from MercadoLibre items.
 */
/* eslint-disable camelcase */

import { isNull } from 'lodash';
import mercadoLibreService from '~/services/mercadoLibre';
import { DetailedItem, ItemResult } from '~/types/MercadoLibre';
import { extractInformationFromProductResult, getAuthor, getCategoryBreadcrumb } from './common';

const getItemDescription = async (id: string): Promise<string> => {
  try {
    const descriptionResult = await mercadoLibreService.getItemDescriptionById(id);
    if (isNull(descriptionResult)) {
      return '';
    }
    const { text, plain_text } = descriptionResult;
    if (text.trim() !== '') {
      return text;
    }
    return plain_text;
  } catch (error) {
    throw error;
  }
};

/**
 * Returns the item information from a specific ID. Returns null if it's not found.
 * @param id ID of the item.
 */
export const getItemById = async (id: string): Promise<ItemResult | null> => {
  try {
    const author = getAuthor();
    const itemDataPromise = mercadoLibreService.getItemById(id);
    const itemDescriptionPromise = getItemDescription(id);
    const [serviceItem, description] = await Promise.all([itemDataPromise, itemDescriptionPromise]);
    if (isNull(serviceItem)) {
      return null;
    }
    const item = extractInformationFromProductResult(serviceItem);
    const categories = await getCategoryBreadcrumb(serviceItem.category_id);
    const { sold_quantity } = serviceItem;
    const detailedItem: DetailedItem = { ...item, categories, description, sold_quantity };
    return {
      author,
      item: detailedItem,
    };
  } catch (error) {
    throw error;
  }
};

export default { getItemById };
