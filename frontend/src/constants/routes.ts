/**
 * Contains the routes of the application.
 */

export default {
  /**
   * Contains the main screen of the application.
   */
  MAIN: '/',

  /**
   * Contains the list item screen of the application.
   */
  ITEMS: '/items',

  /**
   * Item specific page.
   */
  ITEM: '/items/:id',

  /**
   * Query params.
   */
  QUERY_PARAMS: {
    /**
     * Search text query param.
     */
    SEARCH: 'search',

    /**
     * Limit query param.
     */
    LIMIT: 'limit',

    /**
     * Offset query param.
     */
    OFFSET: 'offset',

    /**
     * Category query param.
     */
    CATEGORY: 'category',
  },
};
