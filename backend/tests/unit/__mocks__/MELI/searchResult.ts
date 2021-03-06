/**
 * Contains the mock for the MELI raw items by search.
 */
import { MELISeachByQueryResults } from '../../../../src/types/services/MercadoLibre/SearchResult';

export const mockedMELISearchResult: MELISeachByQueryResults = {
  site_id: 'MLA',
  country_default_time_zone: 'GMT-03:00',
  query: 'shitzu',
  paging: {
    total: 382,
    primary_results: 382,
    offset: 0,
    limit: 5,
  },
  results: [
    {
      id: 'MLA933038257',
      site_id: 'MLA',
      title: 'Perro De Raza /cachorros Shitzu Tzu Mini Hembra-macho',
      seller: {
        id: 200191634,
        permalink: 'http://perfil.mercadolibre.com.ar/MOME7412981',
        registration_date: '2015-12-04T23:33:48.000-04:00',
        car_dealer: false,
        real_estate_agency: false,
        tags: ['normal', 'credits_profile', 'messages_as_seller'],
        seller_reputation: {
          power_seller_status: null,
          level_id: '5_green',
          metrics: {
            cancellations: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            claims: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            delayed_handling_time: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            sales: {
              period: '365 days',
              completed: 22,
            },
          },
          transactions: {
            canceled: 2,
            period: 'historic',
            total: 24,
            ratings: {
              negative: 0,
              neutral: 0,
              positive: 1,
            },
            completed: 22,
          },
        },
      },
      price: 45000,
      prices: {
        id: 'MLA933038257',
        prices: [
          {
            id: '64',
            type: 'standard',
            amount: 45000,
            regular_amount: null,
            currency_id: 'ARS',
            last_updated: '2022-07-01T01:55:32Z',
            conditions: {
              context_restrictions: [],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            exchange_rate_context: 'DEFAULT',
            metadata: {},
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [],
        reference_prices: [
          {
            id: '60',
            type: 'min_standard',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            amount: 500,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-28T04:13:56Z',
          },
          {
            id: '61',
            type: 'was',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: '2022-06-28T04:13:56Z',
              end_time: '2022-07-05T04:13:56Z',
              eligible: true,
            },
            amount: 40000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-28T04:13:56Z',
          },
        ],
        purchase_discounts: [],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 1,
      sold_quantity: 3,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-10-16T17:23:31.000Z',
      condition: 'new',
      permalink:
        'https://articulo.mercadolibre.com.ar/MLA-933038257-perro-de-raza-cachorros-shitzu-tzu-mini-hembra-macho-_JM',
      thumbnail: 'http://http2.mlstatic.com/D_856822-MLA50499164167_062022-I.jpg',
      thumbnail_id: '856822-MLA50499164167_062022',
      accepts_mercadopago: true,
      installments: {
        quantity: 12,
        amount: 6381.38,
        rate: 70.17,
        currency_id: 'ARS',
      },
      address: {
        state_id: 'AR-B',
        state_name: 'Buenos Aires',
        city_id: 'TUxBQ01FUmUyYWZl',
        city_name: 'Merlo',
      },
      shipping: {
        free_shipping: false,
        mode: 'not_specified',
        tags: [],
        logistic_type: 'not_specified',
        store_pick_up: false,
      },
      seller_address: {
        id: '',
        comment: '',
        address_line: '',
        zip_code: '',
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        city: {
          id: 'TUxBQ01FUmUyYWZl',
          name: 'Merlo',
        },
        latitude: '',
        longitude: '',
      },
      attributes: [
        {
          id: 'COAT_LENGTH',
          values: [
            {
              struct: null,
              source: 7092,
              id: '2307589',
              name: 'Largo',
            },
          ],
          source: 7092,
          name: 'Largo del pelaje',
          value_id: '2307589',
          value_name: 'Largo',
          value_struct: null,
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Otros',
        },
        {
          values: [
            {
              source: 7092,
              id: '2230284',
              name: 'Nuevo',
              struct: null,
            },
          ],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Otros',
          source: 7092,
          name: 'Condici??n del ??tem',
          value_id: '2230284',
          value_struct: null,
          id: 'ITEM_CONDITION',
          value_name: 'Nuevo',
        },
      ],
      original_price: null,
      category_id: 'MLA1073',
      official_store_id: null,
      domain_id: 'MLA-PUREBRED_DOGS',
      catalog_product_id: null,
      tags: ['good_quality_thumbnail', 'good_quality_picture', 'immediate_payment'],
      order_backend: 1,
      use_thumbnail_id: true,
      offer_score: null,
      offer_share: null,
      match_score: null,
      winner_item_id: null,
      melicoin: null,
      discounts: null,
    },
    {
      id: 'MLA912295399',
      site_id: 'MLA',
      title: 'Shitzu Shihtzu Cachorros',
      seller: {
        id: 39268809,
        permalink: 'http://perfil.mercadolibre.com.ar/NATACUERVA',
        registration_date: '2004-01-04T19:38:29.000-04:00',
        car_dealer: false,
        real_estate_agency: false,
        tags: ['normal', 'credits_profile', 'messages_as_seller'],
        seller_reputation: {
          power_seller_status: null,
          level_id: '5_green',
          metrics: {
            cancellations: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            claims: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            delayed_handling_time: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            sales: {
              period: '365 days',
              completed: 15,
            },
          },
          transactions: {
            canceled: 0,
            period: 'historic',
            total: 15,
            ratings: {
              negative: 0,
              neutral: 0,
              positive: 1,
            },
            completed: 15,
          },
        },
      },
      price: 68000,
      prices: {
        id: 'MLA912295399',
        prices: [
          {
            id: '13',
            type: 'standard',
            amount: 68000,
            regular_amount: null,
            currency_id: 'ARS',
            last_updated: '2022-06-02T23:02:18Z',
            conditions: {
              context_restrictions: [],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            exchange_rate_context: 'DEFAULT',
            metadata: {},
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [],
        reference_prices: [
          {
            id: '22',
            type: 'min_standard',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            amount: 60000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-30T04:16:33Z',
          },
          {
            id: '23',
            type: 'was',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: '2022-06-30T04:16:33Z',
              end_time: '2022-07-07T04:16:33Z',
              eligible: true,
            },
            amount: 65000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-30T04:16:33Z',
          },
        ],
        purchase_discounts: [],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 1,
      sold_quantity: 0,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-03-12T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://articulo.mercadolibre.com.ar/MLA-912295399-shitzu-shihtzu-cachorros-_JM',
      thumbnail: 'http://http2.mlstatic.com/D_865501-MLA49159158785_022022-I.jpg',
      thumbnail_id: '865501-MLA49159158785_022022',
      accepts_mercadopago: true,
      installments: {
        quantity: 12,
        amount: 9642.97,
        rate: 70.17,
        currency_id: 'ARS',
      },
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'TUxBQkZMTzMwNzRa',
        city_name: 'Flores',
      },
      shipping: {
        free_shipping: false,
        mode: 'not_specified',
        tags: [],
        logistic_type: 'not_specified',
        store_pick_up: false,
      },
      seller_address: {
        id: '',
        comment: '',
        address_line: '',
        zip_code: '',
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        state: {
          id: 'AR-C',
          name: 'Capital Federal',
        },
        city: {
          id: 'TUxBQkZMTzMwNzRa',
          name: 'Flores',
        },
        latitude: '',
        longitude: '',
      },
      attributes: [
        {
          id: 'COAT_LENGTH',
          value_id: '2307589',
          value_struct: null,
          attribute_group_name: 'Otros',
          source: 1505,
          name: 'Largo del pelaje',
          value_name: 'Largo',
          values: [
            {
              id: '2307589',
              name: 'Largo',
              struct: null,
              source: 1505,
            },
          ],
          attribute_group_id: 'OTHERS',
        },
        {
          values: [
            {
              id: '2230284',
              name: 'Nuevo',
              struct: null,
              source: 7092,
            },
          ],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Otros',
          source: 7092,
          id: 'ITEM_CONDITION',
          name: 'Condici??n del ??tem',
          value_name: 'Nuevo',
          value_id: '2230284',
          value_struct: null,
        },
      ],
      original_price: null,
      category_id: 'MLA1073',
      official_store_id: null,
      domain_id: 'MLA-PUREBRED_DOGS',
      catalog_product_id: 'MLA6507462',
      tags: ['good_quality_picture', 'good_quality_thumbnail', 'immediate_payment'],
      order_backend: 2,
      use_thumbnail_id: true,
      offer_score: null,
      offer_share: null,
      match_score: null,
      winner_item_id: null,
      melicoin: null,
      discounts: null,
    },
    {
      id: 'MLA1145160535',
      site_id: 'MLA',
      title: 'Shitzu Cachorros ',
      seller: {
        id: 211259036,
        permalink: 'http://perfil.mercadolibre.com.ar/CALA895376',
        registration_date: '2016-04-14T11:07:03.000-04:00',
        car_dealer: false,
        real_estate_agency: false,
        tags: ['normal', 'messages_as_seller'],
        seller_reputation: {
          power_seller_status: null,
          level_id: '5_green',
          metrics: {
            cancellations: {
              period: '365 days',
              rate: 0,
              value: 1,
            },
            claims: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            delayed_handling_time: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            sales: {
              period: '365 days',
              completed: 10,
            },
          },
          transactions: {
            canceled: 1,
            period: 'historic',
            total: 11,
            ratings: {
              negative: 0,
              neutral: 0,
              positive: 1,
            },
            completed: 10,
          },
        },
      },
      price: 32000,
      prices: {
        id: 'MLA1145160535',
        prices: [
          {
            id: '1',
            type: 'standard',
            amount: 32000,
            regular_amount: null,
            currency_id: 'ARS',
            last_updated: '2022-07-01T23:25:51Z',
            conditions: {
              context_restrictions: [],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            exchange_rate_context: 'DEFAULT',
            metadata: {},
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [],
        reference_prices: [],
        purchase_discounts: [],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 1,
      sold_quantity: 0,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_pro',
      stop_time: '2042-06-26T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://articulo.mercadolibre.com.ar/MLA-1145160535-shitzu-cachorros-_JM',
      thumbnail: 'http://http2.mlstatic.com/D_865177-MLA50546869461_072022-I.jpg',
      thumbnail_id: '865177-MLA50546869461_072022',
      accepts_mercadopago: true,
      installments: {
        quantity: 6,
        amount: 5333.33,
        rate: 0,
        currency_id: 'ARS',
      },
      address: {
        state_id: 'AR-B',
        state_name: 'Buenos Aires',
        city_id: null,
        city_name: 'bsas',
      },
      shipping: {
        free_shipping: false,
        mode: 'not_specified',
        tags: [],
        logistic_type: 'not_specified',
        store_pick_up: false,
      },
      seller_address: {
        id: '',
        comment: '',
        address_line: '',
        zip_code: '',
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        city: {
          id: null,
          name: 'bsas',
        },
        latitude: '',
        longitude: '',
      },
      attributes: [
        {
          id: 'COAT_LENGTH',
          value_name: 'Largo',
          value_struct: null,
          values: [
            {
              id: '2307589',
              name: 'Largo',
              struct: null,
              source: 1505,
            },
          ],
          source: 1505,
          name: 'Largo del pelaje',
          value_id: '2307589',
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Otros',
        },
        {
          name: 'Condici??n del ??tem',
          value_struct: null,
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Otros',
          source: 7092,
          id: 'ITEM_CONDITION',
          value_id: '2230284',
          value_name: 'Nuevo',
          values: [
            {
              struct: null,
              source: 7092,
              id: '2230284',
              name: 'Nuevo',
            },
          ],
        },
      ],
      differential_pricing: {
        id: 33678187,
      },
      original_price: null,
      category_id: 'MLA1073',
      official_store_id: null,
      domain_id: 'MLA-PUREBRED_DOGS',
      catalog_product_id: null,
      tags: ['good_quality_picture', 'good_quality_thumbnail', 'immediate_payment'],
      order_backend: 3,
      use_thumbnail_id: true,
      offer_score: null,
      offer_share: null,
      match_score: null,
      winner_item_id: null,
      melicoin: null,
      discounts: null,
    },
    {
      id: 'MLA1106055539',
      site_id: 'MLA',
      title: 'Shitzu Machito',
      seller: {
        id: 830339394,
        permalink: 'http://perfil.mercadolibre.com.ar/ARACELISPIMENTEL',
        registration_date: '2021-09-24T21:59:55.000-04:00',
        car_dealer: false,
        real_estate_agency: false,
        tags: ['normal', 'credits_profile', 'messages_as_seller'],
        seller_reputation: {
          power_seller_status: null,
          level_id: '5_green',
          metrics: {
            cancellations: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            claims: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            delayed_handling_time: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            sales: {
              period: '365 days',
              completed: 22,
            },
          },
          transactions: {
            canceled: 4,
            period: 'historic',
            total: 26,
            ratings: {
              negative: 0,
              neutral: 0,
              positive: 1,
            },
            completed: 22,
          },
        },
      },
      price: 65000,
      prices: {
        id: 'MLA1106055539',
        prices: [
          {
            id: '12',
            type: 'standard',
            amount: 65000,
            regular_amount: null,
            currency_id: 'ARS',
            last_updated: '2022-03-31T14:50:45Z',
            conditions: {
              context_restrictions: [],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            exchange_rate_context: 'DEFAULT',
            metadata: {},
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [],
        reference_prices: [
          {
            id: '21',
            type: 'min_standard',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            amount: 58000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-04-30T04:15:53Z',
          },
          {
            id: '22',
            type: 'was',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: '2022-04-30T04:15:53Z',
              end_time: '2022-05-07T04:15:53Z',
              eligible: true,
            },
            amount: 62000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-04-30T04:15:53Z',
          },
        ],
        purchase_discounts: [],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 1,
      sold_quantity: 2,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2041-09-25T13:47:54.000Z',
      condition: 'new',
      permalink: 'https://articulo.mercadolibre.com.ar/MLA-1106055539-shitzu-machito-_JM',
      thumbnail: 'http://http2.mlstatic.com/D_857788-MLA47710114154_092021-I.jpg',
      thumbnail_id: '857788-MLA47710114154_092021',
      accepts_mercadopago: true,
      installments: {
        quantity: 12,
        amount: 9217.54,
        rate: 70.17,
        currency_id: 'ARS',
      },
      address: {
        state_id: 'AR-B',
        state_name: 'Buenos Aires',
        city_id: null,
        city_name: 'Palermo',
      },
      shipping: {
        free_shipping: false,
        mode: 'not_specified',
        tags: [],
        logistic_type: 'not_specified',
        store_pick_up: false,
      },
      seller_address: {
        id: '',
        comment: '',
        address_line: '',
        zip_code: '',
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        city: {
          id: null,
          name: 'Palermo',
        },
        latitude: '',
        longitude: '',
      },
      attributes: [
        {
          value_struct: null,
          attribute_group_name: 'Otros',
          source: 7092,
          id: 'COAT_LENGTH',
          name: 'Largo del pelaje',
          value_id: '2307589',
          value_name: 'Largo',
          values: [
            {
              id: '2307589',
              name: 'Largo',
              struct: null,
              source: 7092,
            },
          ],
          attribute_group_id: 'OTHERS',
        },
        {
          id: 'ITEM_CONDITION',
          value_id: '2230284',
          value_name: 'Nuevo',
          values: [
            {
              id: '2230284',
              name: 'Nuevo',
              struct: null,
              source: 7092,
            },
          ],
          attribute_group_name: 'Otros',
          source: 7092,
          name: 'Condici??n del ??tem',
          value_struct: null,
          attribute_group_id: 'OTHERS',
        },
      ],
      original_price: null,
      category_id: 'MLA1073',
      official_store_id: null,
      domain_id: 'MLA-PUREBRED_DOGS',
      catalog_product_id: null,
      tags: [
        'loyalty_discount_eligible',
        'good_quality_picture',
        'good_quality_thumbnail',
        'immediate_payment',
      ],
      order_backend: 4,
      use_thumbnail_id: true,
      offer_score: null,
      offer_share: null,
      match_score: null,
      winner_item_id: null,
      melicoin: null,
      discounts: null,
    },
    {
      id: 'MLA1111106270',
      site_id: 'MLA',
      title: 'Cachorro Shitzu Shitzu !! Hermoso !! Listo Para Entregar',
      seller: {
        id: 398515232,
        permalink: 'http://perfil.mercadolibre.com.ar/ROLUZSANCHEZ',
        registration_date: '2019-01-25T16:02:50.000-04:00',
        car_dealer: false,
        real_estate_agency: false,
        tags: ['normal', 'credits_profile', 'messages_as_seller'],
        seller_reputation: {
          power_seller_status: null,
          level_id: '5_green',
          metrics: {
            cancellations: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            claims: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            delayed_handling_time: {
              period: '365 days',
              rate: 0,
              value: 0,
            },
            sales: {
              period: '365 days',
              completed: 12,
            },
          },
          transactions: {
            canceled: 6,
            period: 'historic',
            total: 18,
            ratings: {
              negative: 0,
              neutral: 0,
              positive: 1,
            },
            completed: 12,
          },
        },
      },
      price: 50000,
      prices: {
        id: 'MLA1111106270',
        prices: [
          {
            id: '17',
            type: 'standard',
            amount: 50000,
            regular_amount: null,
            currency_id: 'ARS',
            last_updated: '2022-06-24T01:55:18Z',
            conditions: {
              context_restrictions: [],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            exchange_rate_context: 'DEFAULT',
            metadata: {},
          },
        ],
        presentation: {
          display_currency: 'ARS',
        },
        payment_method_prices: [],
        reference_prices: [
          {
            id: '18',
            type: 'min_standard',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: null,
              end_time: null,
              eligible: true,
            },
            amount: 5000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-29T04:16:03Z',
          },
          {
            id: '19',
            type: 'was',
            conditions: {
              context_restrictions: ['channel_marketplace'],
              start_time: '2022-06-29T04:16:03Z',
              end_time: '2022-07-06T04:16:03Z',
              eligible: true,
            },
            amount: 5000,
            currency_id: 'ARS',
            exchange_rate_context: 'DEFAULT',
            tags: [],
            last_updated: '2022-06-29T04:16:03Z',
          },
        ],
        purchase_discounts: [],
      },
      sale_price: null,
      currency_id: 'ARS',
      available_quantity: 1,
      sold_quantity: 1,
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_special',
      stop_time: '2042-05-31T02:04:10.000Z',
      condition: 'new',
      permalink:
        'https://articulo.mercadolibre.com.ar/MLA-1111106270-cachorro-shitzu-shitzu-hermoso-listo-para-entregar-_JM',
      thumbnail: 'http://http2.mlstatic.com/D_739580-MLA48119309306_112021-I.jpg',
      thumbnail_id: '739580-MLA48119309306_112021',
      accepts_mercadopago: true,
      installments: {
        quantity: 12,
        amount: 7090.42,
        rate: 70.17,
        currency_id: 'ARS',
      },
      address: {
        state_id: 'AR-B',
        state_name: 'Buenos Aires',
        city_id: null,
        city_name: '9 De Abril',
      },
      shipping: {
        free_shipping: false,
        mode: 'not_specified',
        tags: [],
        logistic_type: 'not_specified',
        store_pick_up: false,
      },
      seller_address: {
        id: '',
        comment: '',
        address_line: '',
        zip_code: '',
        country: {
          id: 'AR',
          name: 'Argentina',
        },
        state: {
          id: 'AR-B',
          name: 'Buenos Aires',
        },
        city: {
          id: null,
          name: '9 De Abril',
        },
        latitude: '',
        longitude: '',
      },
      attributes: [
        {
          value_name: 'Largo',
          value_struct: null,
          attribute_group_name: 'Otros',
          source: 1505,
          id: 'COAT_LENGTH',
          name: 'Largo del pelaje',
          value_id: '2307589',
          values: [
            {
              id: '2307589',
              name: 'Largo',
              struct: null,
              source: 1505,
            },
          ],
          attribute_group_id: 'OTHERS',
        },
        {
          source: 7092,
          id: 'ITEM_CONDITION',
          value_name: 'Nuevo',
          values: [
            {
              id: '2230284',
              name: 'Nuevo',
              struct: null,
              source: 7092,
            },
          ],
          attribute_group_name: 'Otros',
          name: 'Condici??n del ??tem',
          value_id: '2230284',
          value_struct: null,
          attribute_group_id: 'OTHERS',
        },
      ],
      original_price: null,
      category_id: 'MLA1073',
      official_store_id: null,
      domain_id: 'MLA-PUREBRED_DOGS',
      catalog_product_id: 'MLA6452805',
      tags: ['good_quality_picture', 'good_quality_thumbnail', 'immediate_payment'],
      order_backend: 5,
      use_thumbnail_id: true,
      offer_score: null,
      offer_share: null,
      match_score: null,
      winner_item_id: null,
      melicoin: null,
      discounts: null,
    },
  ],
  sort: {
    id: 'relevance',
    name: 'More relevant',
  },
  available_sorts: [
    {
      id: 'price_asc',
      name: 'Lower price',
    },
    {
      id: 'price_desc',
      name: 'Higher price',
    },
  ],
  filters: [
    {
      id: 'category',
      name: 'Categories',
      type: 'text',
      values: [
        {
          id: 'MLA1073',
          name: 'Perros de Raza',
          path_from_root: [
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
        },
      ],
    },
  ],
  available_filters: [
    {
      id: 'state',
      name: 'Location',
      type: 'text',
      values: [
        {
          id: 'TUxBUEdSQXJlMDNm',
          name: 'Bs.As. G.B.A. Sur',
          results: 146,
        },
        {
          id: 'TUxBUENBUGw3M2E1',
          name: 'Capital Federal',
          results: 105,
        },
        {
          id: 'TUxBUEdSQWVmNTVm',
          name: 'Bs.As. G.B.A. Oeste',
          results: 44,
        },
        {
          id: 'TUxBUEdSQWU4ZDkz',
          name: 'Bs.As. G.B.A. Norte',
          results: 11,
        },
        {
          id: 'TUxBUFpPTmFpbnRl',
          name: 'Buenos Aires Interior',
          results: 8,
        },
        {
          id: 'TUxBUENPUmFkZGIw',
          name: 'C??rdoba',
          results: 7,
        },
        {
          id: 'TUxBUFNBTm9lOTlk',
          name: 'Santiago del Estero',
          results: 6,
        },
        {
          id: 'TUxBUFNBTmU5Nzk2',
          name: 'Santa Fe',
          results: 6,
        },
        {
          id: 'TUxBUFNBTGFjMTJi',
          name: 'Salta',
          results: 3,
        },
        {
          id: 'TUxBUFRVQ244NmM3',
          name: 'Tucum??n',
          results: 3,
        },
        {
          id: 'TUxBUE1FTmE5OWQ4',
          name: 'Mendoza',
          results: 2,
        },
        {
          id: 'TUxBUE1JU3MzNjIx',
          name: 'Misiones',
          results: 2,
        },
        {
          id: 'TUxBUEVOVHMzNTdm',
          name: 'Entre R??os',
          results: 1,
        },
      ],
    },
    {
      id: 'price',
      name: 'Precio',
      type: 'range',
      values: [
        {
          id: '*-45000.0',
          name: 'Up to $45.000',
          results: 119,
        },
        {
          id: '45000.0-55000.0',
          name: '$45.000 to $55.000',
          results: 106,
        },
        {
          id: '55000.0-*',
          name: 'More than $55.000',
          results: 157,
        },
      ],
    },
    {
      id: 'accepts_mercadopago',
      name: 'MercadoPago filter',
      type: 'boolean',
      values: [
        {
          id: 'yes',
          name: 'With MercadoPago',
          results: 382,
        },
      ],
    },
    {
      id: 'installments',
      name: 'Pago',
      type: 'text',
      values: [
        {
          id: 'yes',
          name: 'Installments',
          results: 382,
        },
        {
          id: 'no_interest',
          name: 'Sin inter??s',
          results: 149,
        },
      ],
    },
    {
      id: 'since',
      name: 'Auction start date filter',
      type: 'text',
      values: [
        {
          id: 'today',
          name: 'Publicados hoy',
          results: 1,
        },
      ],
    },
    {
      id: 'until',
      name: 'Auction stop filter',
      type: 'text',
      values: [
        {
          id: 'today',
          name: 'Ending today',
          results: 1,
        },
      ],
    },
    {
      id: 'has_video',
      name: 'Video publications filter',
      type: 'boolean',
      values: [
        {
          id: 'yes',
          name: 'Publications with video',
          results: 1,
        },
      ],
    },
    {
      id: 'has_pictures',
      name: 'Items with images filter',
      type: 'boolean',
      values: [
        {
          id: 'yes',
          name: 'With pictures',
          results: 382,
        },
      ],
    },
    {
      id: 'AGE',
      name: 'Edad',
      type: 'range',
      values: [
        {
          id: '(*-46d??as)',
          name: 'Menos de 46 d??as',
          results: 66,
        },
        {
          id: '[46d??as-55d??as)',
          name: '46 a 54 d??as',
          results: 28,
        },
        {
          id: '[55d??as-10semanas)',
          name: '55 d??as a 10 semanas',
          results: 21,
        },
        {
          id: '[10semanas-*)',
          name: '10 semanas o m??s',
          results: 24,
        },
      ],
    },
    {
      id: 'ANIMAL_GENDER',
      name: 'G??nero del animal',
      type: 'STRING',
      values: [
        {
          id: '3896960',
          name: 'Macho',
          results: 91,
        },
        {
          id: '3896959',
          name: 'Hembra',
          results: 83,
        },
      ],
    },
    {
      id: 'BREED',
      name: 'Raza',
      type: 'STRING',
      values: [
        {
          id: '7013715',
          name: 'Malt??s',
          results: 104,
        },
        {
          id: '2227147',
          name: 'Shih Tzu',
          results: 50,
        },
        {
          id: '7013721',
          name: 'Caniche',
          results: 3,
        },
        {
          id: '7013716',
          name: 'Yorkshire',
          results: 3,
        },
        {
          id: '7013723',
          name: 'Spitz Alem??n',
          results: 1,
        },
        {
          id: '7013722',
          name: 'Samoieda',
          results: 1,
        },
        {
          id: '3564754',
          name: 'Terrier',
          results: 1,
        },
      ],
    },
    {
      id: 'COAT_LENGTH',
      name: 'Largo del pelaje',
      type: 'STRING',
      values: [
        {
          id: '2307589',
          name: 'Largo',
          results: 158,
        },
        {
          id: '2307588',
          name: 'Corto',
          results: 5,
        },
      ],
    },
    {
      id: 'ITEM_CONDITION',
      name: 'Condici??n',
      type: 'STRING',
      values: [
        {
          id: '2230284',
          name: 'Nuevo',
          results: 236,
        },
        {
          id: '2230581',
          name: 'Usado',
          results: 144,
        },
      ],
    },
    {
      id: 'WITH_PEDIGREE',
      name: 'Otras caracter??sticas',
      type: 'boolean',
      values: [
        {
          id: '242085',
          name: 'Con pedigree',
          results: 10,
        },
      ],
    },
  ],
};
