/**
 * Containts the types for the backend.
 */

/**
 * Contains the MercadoLibre types.
 */

export interface SearchParams {
  q?: string;
  category?: string;
  offset?: string | number;
  limit?: string | number;
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
  condition: string;
  free_shipping: boolean;
  seller_address: SellerAddress;
}

export interface ItemCategory {
  id: string;
  name: string;
}

export interface ItemPicture {
  url: string;
  width: number;
  height: number;
}

export interface DetailedItem extends Item {
  all_pictures: ItemPicture[];
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
