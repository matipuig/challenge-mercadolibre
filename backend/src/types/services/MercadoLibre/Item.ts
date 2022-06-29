/**
 * Contains MercadoLibre API Results types.
 */

import { ConditionType, SellerAddress, ShippingType } from './common';

export interface MELIRawItem {
  id: string;
  site_id: string;
  title: string;
  subtitle: string | null;
  seller_id: number;
  category_id: string;
  official_store_id: unknown;
  price: number;
  base_price: number;
  original_price: number | null;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: unknown[];
  buying_mode: 'buy_it_now';
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: ConditionType;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: string[];
  video_id: unknown;
  descriptions: unknown[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: unknown[];
  shipping: ShippingType;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: unknown;
  location: unknown;
  coverage_areas: unknown[];
  attributes: unknown[];
  warnings: unknown[];
  listing_source: string;
  variations: unknown[];
  status: string;
  sub_status: unknown[];
  tags: unknown[];
  warranty: string;
  catalog_product_id: unknown;
  domain_id: string;
  parent_item_id: string;
  differential_pricing: unknown;
  deal_ids: unknown[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
  channels: unknown[];
}

export interface MELIItemDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: unknown;
}

export interface MELIRawCategory {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: {
    id: string;
    name: string;
  }[];
  children_categories: unknown[];
  attribute_types: 'attributes';
  settings: Record<string, unknown>;
  channels_settings: unknown[];
  meta_categ_id: unknown;
  attributable: boolean;
  date_created: string;
}
