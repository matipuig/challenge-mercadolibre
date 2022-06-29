/**
 * Has the config for the application. Mainly loaded from the environment.
 * IMPORTANT: If you want NEXT to allow a variable to be visible in the client, it
 * MUST start with "NEXT_PUBLIC_". Otherwise it would be undefined.
 * NEXT_PUBLIC_ variables are not available using the function getFromEnvironmentOrError.
 */

import { LogLevels } from './types/logger';

const LOGS_LEVEL_LABEL = 'LOGS_LEVEL';

const getFromEnvironmentOrError = (variableName: string): string => {
  const value = process.env[variableName];
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable "${variableName}" is not defined.`);
  }
  return value;
};

const getLogLevelFromEnvironment = (): LogLevels => {
  const value = process.env[LOGS_LEVEL_LABEL];
  if (typeof value === 'undefined') {
    return LogLevels.silly;
  }
  const validLogLevels: string[] = Object.values(LogLevels);
  if (!validLogLevels.includes(value)) {
    return LogLevels.silly;
  }
  return value as LogLevels;
};

const throwMissingEnvironmentVariablError = (environmentVariable: string): never => {
  throw new Error(`The environment variable "${environmentVariable}" has not been set.`);
};

export const CONFIG = {
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
   * Contains the base URL.
   */
  BASE_URL:
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    throwMissingEnvironmentVariablError('NEXT_PUBLIC_FRONTEND_BASE_URL'),

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

export default CONFIG;
