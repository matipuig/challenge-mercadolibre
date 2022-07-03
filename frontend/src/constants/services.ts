/**
 * Containts services constants.
 */

export default {
  /**
   * Backend constants.
   */
  BACKEND: {
    /**
     * Search constants.
     */
    SEARCH: {
      /**
       * Default limit count for the results.
       */
      DEFAULT_LIMIT_COUNT: 4,

      /**
       * Max limit the request can have
       */
      MAX_LIMIT_COUNT: 50,

      /**
       * Max text length.
       */
      MAX_TEXT_LENGTH: 200,
    },

    /**
     * Time to timeout while connecting.
     */
    TIMEOUT_MS: 1000 * 30,
  },
};
