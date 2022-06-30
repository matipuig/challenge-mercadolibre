/**
 * Contains the no results screen.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { Item, Price, SellerAddress } from '~/types/services/backend';
import { makeHumanFriendly } from '~/utils/conversors';

import styles from './index.module.scss';

interface ListItemsProps {
  items: Item[];
}

const { ROUTES } = CONSTANTS;
const texts = getAvailableI18nTexts();
const { productImageAlt, freeShippingImage } = texts.components.listItems;

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

export const ListItems = ({ items }: ListItemsProps): ReactElement => {
  const { t } = useTranslation();
  return (
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
                  alt={t(productImageAlt).replace('[?]', item.title)}
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
                    <Image
                      src="/images/icons/shipping-small.png"
                      alt={t(freeShippingImage.alt).replace('[?]', item.title)}
                      title={t(freeShippingImage.title)}
                      width={16}
                      height={16}
                      quality={100}
                    />
                  )}
                </div>
              </div>
              <div className={styles.address}>{getAddress(item.seller_address)}</div>
            </div>
            <Link href={getIitemLinkDirection(item)}>
              <a>
                <h2 className={styles.title}>{item.title}</h2>
              </a>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ListItems;
