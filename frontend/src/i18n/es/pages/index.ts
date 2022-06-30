/**
 * Pages texts for internationalizatoin.
 */

export const pages = {
  home: {
    title: 'MercadoLibre: página principal.',
    description: 'Página principal del challenge de MercadoLibre.',
  },
  error404: {
    title: 'MercadoLibre: página no encontrada.',
    description: 'La página solicitada no existe en MercadoLibre.',
  },
  error500: {
    title: 'MercadoLibre: error.',
    description: 'La página solicitada ha presentado un error.',
  },
  items: {
    title: 'MercadoLibre: página de búsqueda.',
    description: 'Buscá los productos que quieras en MercadoLibre.',
  },
} as const;

export default pages;
