/**
 * Facade to access constants.
 */

import LOGS from './logs';
import ROUTES from './routes';
import SERVICES from './services';

const DEFAULT_LANGUAGE = 'es';

export const CONSTANTS = { DEFAULT_LANGUAGE, LOGS, ROUTES, SERVICES };

export default CONSTANTS;
