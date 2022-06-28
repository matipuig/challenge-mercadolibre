/**
 * Has the resources for all the translations in the app.
 */

/**
 *  Language resources.
 */
const resources = {
  es: {
    Error: {
      NOT_DEFINED: 'Ha ocurrido un error no esperado.',

      // API ERRORS.
      API_REQUESTS_TOO_OFTEN: 'Se están enviado demasiadas consultas seguidas.',
      API_METHOD_NOT_FOUND: 'No se pudo encontrar el método buscado.',
      API_INVALID_PARAMS: 'Se han enviado parámetros de API inválidos.',
      API_NOT_AUTHORIZED: 'El usuario no está autorizado.',

      // MERCADO LIBRE
      SERVICE_MERCADO_LIBRE_CATEGORY_ERROR:
        'Ocurrió un error obteniendo la categoría en MercadoLibre.',
      SERVICE_MERCADO_LIBRE_ITEM_ERROR: 'Ocurrió un error obteniendo el item en MercadoLibre',
      SERVICE_MERCADO_LIBRE_ITEM_DESCRIPTION_ERROR:
        'Ocurrió un error obteniendo la descripción del item en MercadoLibre.',
      SERVICE_MERCADO_LIBRE_SEARCH_ERROR:
        'Ocurrió un error ejecutando la búsqueda en MercadoLibre.',
      SERVICE_MERCADO_LIBRE_ITEM_NOT_FOUND: 'El ítem solicitado no existe.',
      OTHER_SERVICE_ERROR: 'Ocurrió un error consumiendo otro servicio.',
    },
  },
  en: {
    Error: {
      NOT_DEFINED: 'A not defined error has been thrown.',

      // API ERRORS.
      API_REQUESTS_TOO_OFTEN: 'You are sending requests too often.',
      API_METHOD_NOT_FOUND: 'Cannot find the method you are looking for.',
      API_INVALID_PARAMS: 'You are sending invalid params.',
      API_NOT_AUTHORIZED: 'The user is not authorized.',

      // MERCADO LIBRE
      SERVICE_MERCADO_LIBRE_CATEGORY_ERROR:
        'An error has ocurred getting the category from MercadoLibre.',
      SERVICE_MERCADO_LIBRE_ITEM_ERROR: 'An error has ocurred getting the item from MercadoLibre',
      SERVICE_MERCADO_LIBRE_ITEM_DESCRIPTION_ERROR:
        'An error has ocurred getting the description from MercadoLibre',
      SERVICE_MERCADO_LIBRE_SEARCH_ERROR:
        'An error has ocurred getting the search results from MercadoLibre.',
      SERVICE_MERCADO_LIBRE_ITEM_NOT_FOUND: 'The item you are looking for doest not exist.',
      OTHER_SERVICE_ERROR: 'An error has ocurred while consuming another service.',
    },
  },
};

export default resources;
