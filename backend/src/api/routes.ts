/**
 * It contains the routes for the different APIs.
 */

import express from 'express';

import { ROUTES } from '~/constants/routes';
import { sendMethodNotFoundError, handleError } from './apiUtils';
import { searchByParams, getById } from './handlers/mercadoLibre';

const _api = express.Router();
const { MERCADO_LIBRE } = ROUTES.API;

/**
 * Mercado Libre APIs.
 */
_api.get(MERCADO_LIBRE.SEARCH_BY_QUERY, searchByParams);
_api.get(MERCADO_LIBRE.GET_ITEM_BY_ID, getById);

/**
 * Error handling.
 */
_api.all('*', sendMethodNotFoundError);
_api.use(handleError);

export const api = _api;
