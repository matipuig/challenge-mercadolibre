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
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
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
  latitude: string;
  longitude: string;
}
