/**
 * Pages texts for internationalizatoin.
 */

export const pages = {
  home: {
    title: 'MercadoLibre: home page.',
    description: 'MercadoLibre home page.',
  },
  error404: {
    title: 'MercadoLibre: page not found.',
    description: 'The requested page is not found.',
  },
  error500: {
    title: 'MercadoLibre: error.',
    description: 'There was an error loading the requested page.',
  },
  items: {
    title: 'MercadoLibre: search page.',
    description: 'Search products in MercadoLibre.',
  },
} as const;

export default pages;
