/**
 * Contains the main application.
 */

import express from 'express';

import CONFIG from './config';
import { logger, LABELS } from '~/utils/logger';
import api from './api';

const { APP_NAME } = CONFIG;
const app = express();

const start = async function start(): Promise<void> {
  try {
    app.set('trust-proxy', true); // Trust the proxy!
    app.use(api);
    logger.info(`${APP_NAME} started.`, LABELS.MAIN);
  } catch (err) {
    const error = err as Error;
    logger.error(error.message, LABELS.MAIN, { error });
    throw error;
  }
};

const end = async function end(): Promise<void> {
  logger.info(`Exiting ${APP_NAME}...`, LABELS.MAIN);
};

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection.', LABELS.PROCESS, { reason, promise });
  throw new Error('Unhandled rejection');
});
process.on('uncaughtException', (error) => {
  logger.error(error.message, LABELS.PROCESS, { error });
  throw error;
});
process.on('exit', end);

start();

export default app;
