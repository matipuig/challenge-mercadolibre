/**
 * Contains the MercadoLibre types.
 */

export interface SearchParams {
  q?: string;
  offset?: string | number;
  limit?: string | number;
  category?: string;
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

export interface SellerAddress {
  country: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  city: {
    id: string;
    name: string;
  };
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  seller_address: SellerAddress;
  condition: string;
  free_shipping: boolean;
}

export interface ItemCategory {
  id: string;
  name: string;
}

export interface DetailedItem extends Item {
  categories: ItemCategory[];
  sold_quantity: number;
  description: string;
}

export interface SearchResultWithCategories {
  author: Author;
  categories: ItemCategory[];
  items: Item[];
}

export interface ItemResult {
  author: Author;
  item: DetailedItem;
}
