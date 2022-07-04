/**
 * Mocks the environment variables.
 */

export const loadEnvironmentVariables = (): void => {
  process.env.NEXT_PUBLIC_FRONTEND_BASE_URL = 'http://localhost:3000';
  process.env.NEXT_PUBLIC_LANGUAGE = 'es';
  process.env.LOGS_LEVEL = 'silly';
  process.env.BACKEND_BASE_URL = 'http://localhost:8080';
  process.env.BACKEND_API_KEY = 'unsafe_api_key';
};

loadEnvironmentVariables();
