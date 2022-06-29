/**
 * Contains the logger types.
 */
/* eslint-disable no-shadow */

export enum LogLevels {
  error = 'error',
  warn = 'warn',
  info = 'info',
  http = 'http',
  verbose = 'verbose',
  debug = 'debug',
  silly = 'silly',
}

export type LogContext = Record<string, unknown>;
