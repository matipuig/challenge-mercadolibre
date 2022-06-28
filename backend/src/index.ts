/**
 * Starts the server and uses HTTPS if needed.
 */

import fs from 'fs';
import http from 'http';
import https from 'https';

import CONSTANTS from './constants';
import CONFIG from './config';
import app from './app';
import { logger, LABELS } from './utils/logger';

const { APP_NAME, PORT, SSL } = CONFIG;
let server;

if (SSL.USE) {
  const { KEY_PATH, CERT_PATH } = SSL;
  const credentials = {
    key: fs.readFileSync(KEY_PATH, 'utf8'),
    cert: fs.readFileSync(CERT_PATH, 'utf8'),
  };
  server = https.createServer(credentials, app);
  logger.info(`${APP_NAME} using SSL certificate ${CERT_PATH}.`, LABELS.SERVER);
} else {
  server = http.createServer(app);
}

server.timeout = CONSTANTS.SECURITY.SERVER.TIMEOUT;
server.on('listening', () => {
  logger.info(`${APP_NAME} listening on port ${PORT}.`, LABELS.SERVER);
});
server.on('error', (err) => {
  const error = err as Error;
  logger.error(`${APP_NAME} errored.`, LABELS.SERVER, { error });
});
server.on('clientError', (err) => {
  const clientError = err as Error;
  logger.error(`${APP_NAME} client errored.`, LABELS.SERVER, { clientError });
});

server.listen(PORT);
