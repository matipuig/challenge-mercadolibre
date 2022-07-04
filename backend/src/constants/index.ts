/**
 * Facade to access constants.
 */

import { AUTHOR } from './author';
import { LOGS } from './logs';
import { ROUTES } from './routes';
import { SECURITY } from './security';
import { SERVICES } from './services';

const DEFAULT_LANGUAGE = 'es';

export const CONSTANTS = { AUTHOR, DEFAULT_LANGUAGE, LOGS, ROUTES, SECURITY, SERVICES };
