/**
 * Components texts for internationalizatoin.
 */

import { layout } from './layout';

export const components = {
  layout,
  common: {
    breadcrumbs: {
      ariaLabel: 'Category [?]',
    },
    priceDisplay: {
      withPesos: '[?] pesos',
    },
  },
  errorBoundary: {
    title: 'Error.',
    text: 'There was an error. Please try again later.',
  },
  erroredPageContent: {
    mainText: 'We are sorry. There was an error loading your page. Please, try again later.',
    linkToMainManu: 'Go to main page.',
  },
  listItems: {
    productImageAlt: '[?] image.',

    freeShippingImage: {
      alt: 'The product [?] has free shipping.',
      title: 'The product has free shipping.',
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
        caption: 'Buy',
        onClickText: 'You bought [?]',
      },
      descriptionLabel: 'Product description',
      picturesAlt: '[?] image.',
      conditionAndSoldCount: {
        new: 'New | [?] sold',
        used: 'Used | [?] sold',
      },
    },
  },
  notFound: {
    mainText: "Couldn't find the page you are looking for..",
    linkToMainManu: 'Go to main page.',
  },
} as const;
