/**
 * Contains the price mock.
 */
import { Price } from '../../../src/types/services/backend';

export const mockedPrices: Price[] = [
  {
    amount: 500,
    decimals: 10,
    currency: 'ARS',
  },
  {
    amount: 100,
    decimals: 20,
    currency: 'US',
  },
];
