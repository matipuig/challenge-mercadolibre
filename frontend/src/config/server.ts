/**
 * Has the config for the application in runtime. Mainly loaded from the environment.
 */

import { LogLevels } from '~/types/logger';

const LOGS_LEVEL_LABEL = 'LOGS_LEVEL';

const getFromEnvironmentOrError = (variableName: string): string => {
  const value = process.env[variableName];
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable "${variableName}" is not defined. `);
  }
  return value;
};

const getLogLevelFromEnvironment = (): LogLevels => {
  const value = process.env[LOGS_LEVEL_LABEL];
  if (typeof value === 'undefined') {
    return LogLevels.Silly;
  }
  const validLogLevels: string[] = Object.values(LogLevels);
  if (!validLogLevels.includes(value)) {
    return LogLevels.Silly;
  }
  return value as LogLevels;
};

/**
 * Contains the server environment variable
 */
export const SERVER_CONFIG = {
  /**
   * Node environment.
   */
  NODE_ENV: getFromEnvironmentOrError('NODE_ENV'),

  /**
   * Application name.
   */
  APP_NAME: getFromEnvironmentOrError('npm_package_name'),

  /**
   * Application version.
   */
  APP_VERSION: getFromEnvironmentOrError('npm_package_version'),

  /**
   * Sets logs level.
   */
  LOGS_LEVEL: getLogLevelFromEnvironment(),

  /**
   * Services configuration.
   */
  SERVICES: {
    /**
     * Own MercadoLibre API backend.
     */
    BACKEND: {
      /**
       * Base URL of the services.
       */
      BASE_URL: getFromEnvironmentOrError('BACKEND_BASE_URL'),

      /**
       * API Key to consume the backend.
       */
      API_KEY: getFromEnvironmentOrError('BACKEND_API_KEY'),
    },
  },
};
