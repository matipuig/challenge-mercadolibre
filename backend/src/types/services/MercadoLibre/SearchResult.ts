/**
 * Contains MercadoLibre API Results types.
 */

import { ConditionType, SellerAddress, ShippingType } from './common';

interface SortType {
  id: string;
  name: string;
}

interface FilterValue {
  id: string;
  name: string;
  results?: number;
  path_from_root?: {
    id: string;
    name: string;
  }[];
}

export interface Filter {
  id: string;
  name: string;
  type: 'text' | 'boolean';
  values: FilterValue[];
}

export interface MELISearchProductResult {
  id: string;
  site_id: string;
  title: string;
  seller: unknown;
  price: number;
  prices: unknown;
  sale_price: unknown;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: 'buy_it_now';
  listing_type_id: string;
  stop_time: string;
  condition: ConditionType;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: unknown;
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
  shipping: ShippingType;
  seller_address: SellerAddress;
  attributes: unknown;
  original_price: number;
  category_id: string;
  official_store_id: string | null;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  offer_score: unknown;
  offer_share: unknown;
  match_score: unknown;
  winner_item_id: unknown;
  melicoin: unknown;
  discounts: unknown;
  order_backend: unknown;
}

export interface MELISeachByQueryResults {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: MELISearchProductResult[];
  sort: SortType;
  available_sorts: SortType[];
  filters: Filter[];
  available_filters: Filter[];
}
