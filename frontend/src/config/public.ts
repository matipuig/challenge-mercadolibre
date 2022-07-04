/**
 * Contains the public configuration. They are accesible by frontend.
 * All of them should start with NEXT_PUBLIC_.
 */

const throwMissingEnvironmentVariableError = (environmentVariable: string): never => {
  throw new Error(`The environment variable "${environmentVariable}" has not been set.`);
};

/**
 * Contains the public environment variables.
 */
export const PUBLIC_CONFIG = {
  /**
   * Contains the base URL.
   */
  BASE_URL:
    process.env.NEXT_PUBLIC_FRONTEND_BASE_URL ||
    throwMissingEnvironmentVariableError('NEXT_PUBLIC_FRONTEND_BASE_URL'),

  /**
   * Contains the language.
   */
  LANGUAGE:
    process.env.NEXT_PUBLIC_LANGUAGE ||
    throwMissingEnvironmentVariableError('NEXT_PUBLIC_LANGUAGE'),
};
