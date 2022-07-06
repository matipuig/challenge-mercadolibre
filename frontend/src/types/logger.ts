/**
 * Contains the logger types.
 */
/* Hay un global que se llama LogLevels */
/* eslint-disable no-shadow */

export enum LogLevels {
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Http = 'http',
  Verbose = 'verbose',
  Debug = 'debug',
  Silly = 'silly',
}

export type LogContext = Record<string, unknown>;
