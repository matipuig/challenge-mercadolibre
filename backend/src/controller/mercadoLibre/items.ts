/**
 * Get specific information from MercadoLibre items.
 */
/* eslint-disable camelcase */

import { isNull } from 'lodash';
import {
  getItemById as getMELIItemById,
  getItemDescriptionById as getMELIItemDescriptionById,
} from '~/services/mercadoLibre';
import { DetailedItem, ItemPicture, ItemResult } from '~/types/MercadoLibre';
import { MELIRawItem } from '~/types/services/MercadoLibre/Item';
import { extractInformationFromProductResult, getAuthor, getCategoryBreadcrumb } from './common';

const getItemDescription = async (id: string): Promise<string> => {
  try {
    const descriptionResult = await getMELIItemDescriptionById(id);
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

const getItemPictures = (rawItem: MELIRawItem): ItemPicture[] => {
  const { pictures } = rawItem;
  if (pictures.length === 0) {
    return [];
  }
  return pictures.map((picture) => {
    const url = picture.secure_url || picture.url || '';
    const widthAndHeight = picture.size.split('x');
    const [width, height] = widthAndHeight.map((e) => Number.parseInt(e, 10));
    return { url, width, height };
  });
};

/**
 * Returns the item information from a specific ID. Returns null if it's not found.
 * @param id ID of the item.
 */
export const getItemById = async (id: string): Promise<ItemResult | null> => {
  try {
    const author = getAuthor();
    const itemDataPromise = getMELIItemById(id);
    const itemDescriptionPromise = getItemDescription(id);
    const [serviceItem, description] = await Promise.all([itemDataPromise, itemDescriptionPromise]);
    if (isNull(serviceItem)) {
      return null;
    }
    const item = extractInformationFromProductResult(serviceItem);
    const categories = await getCategoryBreadcrumb(serviceItem.category_id);
    const all_pictures = getItemPictures(serviceItem);
    const { sold_quantity } = serviceItem;
    const detailedItem: DetailedItem = {
      ...item,
      categories,
      description,
      sold_quantity,
      all_pictures,
    };
    return {
      author,
      item: detailedItem,
    };
  } catch (error) {
    throw error;
  }
};
