/**
 * Contains the application logger.
 */
/* eslint-disable no-console */

import { cloneDeep } from 'lodash';
import winston from 'winston';

import { SERVER_CONFIG } from '~/config/server';
import { CONSTANTS } from '~/constants';
import { LogContext, LogLevels } from '~/types/logger';

const { APP_NAME, APP_VERSION, NODE_ENV, LOGS_LEVEL } = SERVER_CONFIG;
const LOG_LABELS = CONSTANTS.LOGS;

const { combine, prettyPrint, json } = winston.format;

const consoleTransport = new winston.transports.Console();
const transports: winston.transport[] = [consoleTransport];
const winstonLogger = winston.createLogger({
  transports,
  level: LOGS_LEVEL,
  format: combine(json(), prettyPrint()),
  handleExceptions: true,
});

const log = (message: string, level: LogLevels, label: string, logContext = {}): boolean => {
  const contextCopy = cloneDeep(logContext);
  const meta = {
    ...contextCopy,
    app: APP_NAME,
    appVersion: APP_VERSION,
    environment: NODE_ENV,
  };
  const timestamp = new Date();
  winstonLogger.log(level, message, { label, timestamp, context: { ...meta } });
  return true;
};

export const LABELS = LOG_LABELS;

export const logger = {
  /**
   * Logs an error.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  error: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Error, label, context),

  /**
   * Logs a warning.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  warn: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Warn, label, context),

  /**
   * Logs information.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  info: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Info, label, context),

  /**
   * Logs http information.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  http: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Http, label, context),

  /**
   * Logs verbosily.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  verbose: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Verbose, label, context),

  /**
   * Logs while debugging.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  debug: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Debug, label, context),

  /**
   * Logs silly.
   * @param message Message to be sent.
   * @param context Context of the log.
   */
  silly: (message: string, label: string, context?: LogContext): boolean =>
    log(message, LogLevels.Silly, label, context),

  /**
   * Turns on or off the logger
   * @param active If it is or not active.
   */
  setActive: (active: boolean): void => {
    winstonLogger.silent = !active;
  },
};

/**
 * Overwrite console methods to unify all the logs across the system.
 * Only if in production. During development it also affects next js developing framework.
 */
if (process.env.NODE_ENV === 'production') {
  console.log = (...args: unknown[]) => logger.info('Console.log', LogLevels.Info, { args });
  console.error = (...args: unknown[]) => logger.error('Console.error', LogLevels.Error, { args });
  console.debug = (...args: unknown[]) => logger.debug('Console.debug', LogLevels.Debug, { args });
  console.info = (...args: unknown[]) => logger.info('Console.info', LogLevels.Info, { args });
  console.table = (...args: unknown[]) => logger.info('Console.table', LogLevels.Info, { args });
  console.warn = (...args: unknown[]) => logger.warn('Console.warn', LogLevels.Warn, { args });
}
