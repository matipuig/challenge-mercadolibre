/**
 * Contains the no results screen.
 */
import { ReactElement } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import { Item, Price, SellerAddress } from '~/types/services/backend';

interface ListItemsProps {
  items: Item[];
}

const getPrice = (price: Price): string => {
  const { currency, amount } = price;
  const currencySign = currency !== 'ARS' ? currency : '$';
  return `${currencySign} ${amount}`;
};

const getAddress = (sellerAddress: SellerAddress): string => {
  const { city, state } = sellerAddress;
  return `${state.name}, ${city.name}`;
};

export const ListItems = ({ items }: ListItemsProps): ReactElement => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.listItem}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={item.picture} width={180} height={180} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionUpperPart}>
              <div className={styles.priceAndShippingContainer}>
                <div className={styles.price}>{getPrice(item.price)}</div>
                <div className={styles.freeShipping}>
                  {item.free_shipping || <img src={'/icons/shipping-small.png'} />}
                </div>
              </div>
              <div className={styles.place}>{getAddress(item.seller_address)}</div>
            </div>
            <div className={styles.title}>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
