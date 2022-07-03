/**
 * Contains the mock for the detailed item.
 */
import { ItemResult } from '../../../../src/types/MercadoLibre';

export const mockedParsedItemResult: ItemResult = {
  author: {
    name: 'Matías',
    lastname: 'Puig',
  },
  item: {
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
    description:
      'LEER :no se me permite pasar ningún tipo de contacto ni dirección por este medio a no ser que compre mi publicación de 200.COMPRAR CON TRANQUILIDAD PUBLICACION ACCESORIOS SHITZU MELI Y COORDINAMOS. (si no hay disponibilidad se puede cancelar dicha compra)En caso de querer comprar por mercado libre con tarjeta COMPRAR PUBLICACION CACHORROS SHITZU MACHO/ HEMBRA PAGO CON TARJETA . VACUNADOS Y DESPARACITADOS!MACHITO NEGRO DOS MESESLISTO PARA ENTREGA!! para más info comprar la publicación Accesorios shitzu meli y coordinamos por privado! Se entregan a partir de los 45 días en adelante una vez que han sido vacunados y previamente desparacitados. Se alimentan con royal canin y están super cuidados y mimados!!HERMOSOS MIMOSOS Y COMPAÑEROS SHITZU MINI.RAZA DE PELO LARGO (NO MUDA PELO)-FACIL DE DOMESTICAR-MUY INTELIGENTES Y TRANQUILOS.-RAZA PEQUEÑA IDEAL PARA DEPARTAMENTOS.-BUENOS CON NIÑOS U OTRAS MASCOTAS.',
    sold_quantity: 0,
    all_pictures: [
      {
        url: 'https://http2.mlstatic.com/D_856822-MLA50499164167_062022-O.jpg',
        width: 281,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_642279-MLA50533456985_062022-O.jpg',
        width: 375,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_736870-MLA50533475838_062022-O.jpg',
        width: 308,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_758703-MLA50533548187_062022-O.jpg',
        width: 375,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_893872-MLA50533471813_062022-O.jpg',
        width: 375,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_906330-MLA50533564089_062022-O.jpg',
        width: 407,
        height: 500,
      },
      {
        url: 'https://http2.mlstatic.com/D_719414-MLA50544547821_072022-O.jpg',
        width: 375,
        height: 500,
      },
    ],
  },
};
