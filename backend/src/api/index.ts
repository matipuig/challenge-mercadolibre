/**
 * It contains the API main configuration (security, body parsing, etc.)
 */

import express from 'express';
import RateLimit from 'express-rate-limit';
import SlowDown from 'express-slow-down';

import CONSTANTS from '~/constants';
import { CODES } from '~/errors';
import apiUtils from './apiUtils';
import routes from './routes';

const { ROUTES, SECURITY } = CONSTANTS;
const router = express.Router();

/**
 * Security settings.
 */
router.use(apiUtils.logIP);
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

router.use(rateLimit);
router.use(slowDown);
router.use(apiUtils.rejectIfNotAuthorized);

/**
 * Entering the API.
 */
router.use(express.json({ limit: SECURITY.MAX_REQUEST_BODY_SIZE }));
router.use(ROUTES.API.BASE, routes);

/**
 * Error handling.
 */
router.all('*', apiUtils.sendMethodNotFoundError);
router.use(apiUtils.handleError);

export default router;
