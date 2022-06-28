/**
 * Loads the app configuration.
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
   * Port the app listens to.
   */
  PORT: getFromEnvironmentOrError('PORT'),

  /**
   * Sets logs level.
   */
  LOGS_LEVEL: getLogLevelFromEnvironment(),

  /**
   * Auth information.
   */
  AUTH: {
    /**
     * API KEY to access the system with.
     */
    API_KEY: getFromEnvironmentOrError('API_KEY'),
  },

  /**
   * SSL configuration.
   */
  SSL: {
    /**
     * Contains if the system will use SSL or not.
     */
    USE: getFromEnvironmentOrError('SSL_MUST_USE') === '1',

    /**
     * Path to the cert file.
     */
    CERT_PATH: getFromEnvironmentOrError('SSL_CERT_PATH'),

    /**
     * Path to the key file.
     */
    KEY_PATH: getFromEnvironmentOrError('SSL_KEY_PATH'),
  },
};

export default CONFIG;
