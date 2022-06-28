/**
 * Contains the MercadoLibre types.
 */

export interface SearchParams {
  q?: string;
  offset?: string | number;
  limit?: string | number;
  [k: string]: unknown;
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface DetailedItem extends Item {
  categories: string[];
  sold_quantity: number;
  description: string;
}

export interface SearchResultWithCategories {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ItemResult {
  author: Author;
  item: DetailedItem;
}
