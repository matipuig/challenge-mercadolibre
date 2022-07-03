/**
 * Contains the mock for the list items.
 */
import { SearchResultWithCategories } from '../../../../src/types/MercadoLibre';

export const mockedParsedSearchResult: SearchResultWithCategories = {
  author: {
    name: 'Matías',
    lastname: 'Puig',
  },
  categories: [
    {
      id: 'MLA1071',
      name: 'Animales y Mascotas',
    },
    {
      id: 'MLA1072',
      name: 'Perros',
    },
    {
      id: 'MLA1073',
      name: 'Perros de Raza',
    },
  ],
  items: [
    {
      id: 'MLA933038257',
      title: 'Perro De Raza /cachorros Shitzu Tzu Mini Hembra-macho',
      price: {
        currency: 'ARS',
        amount: 45000,
        decimals: 0,
      },
      condition: 'new',
      picture: 'http://http2.mlstatic.com/D_856822-MLA50499164167_062022-I.jpg',
      free_shipping: false,
      seller_address: {
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        city: {
          id: 'TUxBQ01FUmUyYWZl',
          name: 'Merlo',
        },
      },
    },
    {
      id: 'MLA912295399',
      title: 'Shitzu Shihtzu Cachorros',
      price: {
        currency: 'ARS',
        amount: 68000,
        decimals: 0,
      },
      condition: 'new',
      picture: 'http://http2.mlstatic.com/D_865501-MLA49159158785_022022-I.jpg',
      free_shipping: false,
      seller_address: {
        state: {
          id: 'AR-C',
          name: 'Capital Federal',
        },
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        city: {
          id: 'TUxBQkZMTzMwNzRa',
          name: 'Flores',
        },
      },
    },
    {
      id: 'MLA1145160535',
      title: 'Shitzu Cachorros ',
      price: {
        currency: 'ARS',
        amount: 32000,
        decimals: 0,
      },
      condition: 'new',
      picture: 'http://http2.mlstatic.com/D_865177-MLA50546869461_072022-I.jpg',
      free_shipping: false,
      seller_address: {
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        city: {
          id: null,
          name: 'bsas',
        },
      },
    },
    {
      id: 'MLA1106055539',
      title: 'Shitzu Machito',
      price: {
        currency: 'ARS',
        amount: 65000,
        decimals: 0,
      },
      condition: 'new',
      picture: 'http://http2.mlstatic.com/D_857788-MLA47710114154_092021-I.jpg',
      free_shipping: false,
      seller_address: {
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        city: {
          id: null,
          name: 'Palermo',
        },
      },
    },
    {
      id: 'MLA1111106270',
      title: 'Cachorro Shitzu Shitzu !! Hermoso !! Listo Para Entregar',
      price: {
        currency: 'ARS',
        amount: 50000,
        decimals: 0,
      },
      condition: 'new',
      picture: 'http://http2.mlstatic.com/D_739580-MLA48119309306_112021-I.jpg',
      free_shipping: false,
      seller_address: {
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        city: {
          id: null,
          name: '9 De Abril',
        },
      },
    },
  ],
};
