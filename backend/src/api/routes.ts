/**
 * It contains the routes for the different APIs.
 */

import express from 'express';

import ROUTES from '~/constants/routes';
import apiUtils from './apiUtils';
import mercadoLibreHandler from './handlers/mercadoLibre';

const api = express.Router();
const { MERCADO_LIBRE } = ROUTES.API;

/**
 * Mercado Libre APIs.
 */
api.get(MERCADO_LIBRE.SEARCH_BY_QUERY, mercadoLibreHandler.searchByParams);
api.get(MERCADO_LIBRE.GET_ITEM_BY_ID, mercadoLibreHandler.getById);

/**
 * Error handling.
 */
api.all('*', apiUtils.sendMethodNotFoundError);
api.use(apiUtils.handleError);

export default api;
