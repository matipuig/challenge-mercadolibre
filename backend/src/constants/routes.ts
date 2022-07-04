/**
 * Contains the routes of the APIs.
 */

export const ROUTES = {
  /**
   * API routes.
   */
  API: {
    /**
     * Base API route.
     */
    BASE: '/api',

    /**
     * Mercado Libre routes.
     */
    MERCADO_LIBRE: {
      /**
       * Search products by query route.
       */
      SEARCH_BY_QUERY: '/items/',

      /**
       * Get item by its ID.
       */
      GET_ITEM_BY_ID: '/items/:id',
    },
  },
};
