/**
 * Containts security constants.
 */

export const SECURITY = {
  /**
   * Max body size per requests.
   */
  MAX_REQUEST_BODY_SIZE: '200mb',

  /**
   * Constants for rate limit.
   */
  RATE_LIMIT: {
    /**
     * Interval in ms in which the rate is controlled.
     */
    WINDOW_MS: 1000,

    /**
     * Max count of requests allowed in the window.
     */
    MAX: 200,
  },

  /**
   * SERVER CONSTANTS.
   */
  SERVER: {
    /**
     * Server connection timeout.
     */
    TIMEOUT: 1000 * 60, // One minute.
  },

  /*
   * Constants for rate slow down.
   */
  SLOW_DOWN: {
    /**
     * Interval in ms in which the rate is controlled.
     */
    WINDOW_MS: 1000,

    /**
     * How many requests will it allow before starting to apply slowdown.
     */
    DELAY_AFTER: 100,

    /**
     * How many miliseconds will it delay each time.
     */
    DELAY_MS: 50,
  },
};
