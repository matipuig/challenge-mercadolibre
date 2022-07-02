/**
 * Components texts for internationalizatoin.
 */

import { layout } from './layout';

export const components = {
  layout,
  common: {
    breadcrumbs: {
      ariaLabel: 'Categoría [?]',
    },
  },
  errorBoundary: {
    title: 'Ha ocurrido un error.',
    text: 'Ha ocurrido un error inesperado, por favor intente nuevamente más tarde.',
  },
  erroredPageContent: {
    mainText: 'Lo sentimos, ha ocurrido un error. Por favor, pruebe nuevamente más tarde.',
    linkToMainManu: 'Volver a la página principal.',
  },
  listItems: {
    productImageAlt: 'Imagen de [?].',
    freeShippingImage: {
      alt: 'El producto [?] tiene envío gratis.',
      title: 'El producto tiene envío gratis.',
    },
    noResults: {
      mainText: 'Sin resultados.',
      textAdvice:
        'Poné al menos 2 caracteres para la búsqueda y tratá de no ser muy específico con las mismas.',
    },
  },
  item: {
    detailedItem: {
      buyButton: {
        caption: 'Comprar',
        onClickText: 'Compraste [?]',
      },
      descriptionLabel: 'Descripción del produco',
      picturesAlt: 'Imagen de [?].',
      conditionAndSoldCount: {
        new: 'Nuevo | [?] vendidos',
        used: 'Usado | [?] vendidos',
      },
    },
  },
  notFound: {
    mainText: 'No se pudo encontrar la página que estás buscando..',
    linkToMainManu: 'Volver a la página principal.',
  },
} as const;

export default { components };
