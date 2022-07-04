/**
 * It contains the API main configuration (security, body parsing, etc.)
 */

import express from 'express';
import RateLimit from 'express-rate-limit';
import SlowDown from 'express-slow-down';

import { CONSTANTS } from '~/constants';
import { CODES } from '~/errors';
import { logIP, rejectIfNotAuthorized, sendMethodNotFoundError, handleError } from './apiUtils';
import { api } from './routes';

const { ROUTES, SECURITY } = CONSTANTS;
const _router = express.Router();

/**
 * Security settings.
 */
_router.use(logIP);
const rateError = () =>
  JSON.stringify({
    success: false,
    errorCode: CODES.API_REQUESTS_TOO_OFTEN,
    error: CODES.API_REQUESTS_TOO_OFTEN,
  });

const rateLimit = RateLimit({
  windowMs: SECURITY.RATE_LIMIT.WINDOW_MS,
  max: SECURITY.RATE_LIMIT.MAX,
  message: rateError(),
});

const slowDown = SlowDown({
  windowMs: SECURITY.SLOW_DOWN.WINDOW_MS,
  delayAfter: SECURITY.SLOW_DOWN.DELAY_AFTER,
  delayMs: SECURITY.SLOW_DOWN.DELAY_MS,
});

_router.use(rateLimit);
_router.use(slowDown);
_router.use(rejectIfNotAuthorized);

/**
 * Entering the API.
 */
_router.use(express.json({ limit: SECURITY.MAX_REQUEST_BODY_SIZE }));
_router.use(ROUTES.API.BASE, api);

/**
 * Error handling.
 */
_router.all('*', sendMethodNotFoundError);
_router.use(handleError);

export const router = _router;
