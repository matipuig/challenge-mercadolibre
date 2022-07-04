/**
 * Mocks the environment variables.
 */

const loadEnvironmentVariables = (): void => {
  (process.env as any).NODE_ENV = 'development';
  process.env.PORT = '8080';
  process.env.LOGS_LEVEL = 'silly';
  process.env.TZ = 'America/Argentina/Buenos_Aires';
  process.env.API_KEY = 'unsafe_api_key';
  process.env.SSL_MUST_USE = '0';
  process.env.SSL_CERT_PATH = '/some/ahpt';
  process.env.SSL_KEY_PATH = '/some/ahpt';
};

loadEnvironmentVariables();
