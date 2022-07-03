/**
 * Contains MercadoLibre common API types.
 */

export interface MercadoLibreAPIError {
  message: string;
  error: string;
  status: number;
  cause: unknown[];
}

export type ConditionType = 'new' | 'used';

export interface ShippingType {
  free_shipping: boolean;
  mode: string;
  tags: unknown[];
  logistic_type: string;
  store_pick_up: boolean;
  methods?: unknown;
  dimensions?: unknown;
  local_pick_up?: unknown;
}

export interface SellerAddress {
  id: string | number;
  comment?: string;
  address_line?: string;
  zip_code?: string;
  country: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  city: {
    id: string | null;
    name: string;
  };
  latitude?: string;
  longitude?: string;
  search_location?: unknown;
}

export interface ProductCategory {
  id: string;
  name: string;
}
