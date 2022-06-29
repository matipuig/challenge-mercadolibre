/**
 * Contains the no results screen.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/Link';

import { CONSTANTS } from '~/constants';
import { Item, Price, SellerAddress } from '~/types/services/backend';
import { makeHumanFriendly } from '~/utils/conversors';

import styles from './index.module.scss';

interface ListItemsProps {
  items: Item[];
}

const { ROUTES } = CONSTANTS;

const getPrice = (price: Price): string => {
  const { currency, amount } = price;
  const currencySign = currency !== 'ARS' ? currency : '$';
  const humanFriendlyAmount = makeHumanFriendly(amount);
  return `${currencySign} ${humanFriendlyAmount}`;
};

const getAddress = (sellerAddress: SellerAddress): string => {
  const { city, state } = sellerAddress;
  return `${state.name}, ${city.name}`;
};

const getIitemLinkDirection = (listItem: Item): string => ROUTES.ITEM.replace(':id', listItem.id);

export const ListItems = ({ items }: ListItemsProps): ReactElement => (
  <section className={styles.container}>
    {items.map((item) => (
      <article key={item.id} className={styles.listItem}>
        <figure className={styles.imageContainer}>
          <Link href={getIitemLinkDirection(item)}>
            <a>
              <Image
                className={styles.image}
                src={item.picture}
                width={160}
                height={160}
                quality="100"
              />
            </a>
          </Link>
        </figure>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionUpperPart}>
            <div className={styles.priceAndShippingContainer}>
              <div className={styles.price}>{getPrice(item.price)}</div>
              <div className={styles.freeShipping}>
                {item.free_shipping || (
                  <Image src="/icons/shipping-small.png" alt="" height={16} width={16} />
                )}
              </div>
            </div>
            <div className={styles.address}>{getAddress(item.seller_address)}</div>
          </div>
          <Link href={getIitemLinkDirection(item)}>
            <a>
              <div className={styles.title}>{item.title}</div>
            </a>
          </Link>
        </div>
      </article>
    ))}
  </section>
);

export default ListItems;
