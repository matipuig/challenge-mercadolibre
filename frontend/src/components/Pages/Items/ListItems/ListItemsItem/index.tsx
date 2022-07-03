/**
 * Contains the list items item
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { PriceDisplay } from '~/components/Pages/Common/PriceDisplay';
import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts, i18nReplace } from '~/i18n';
import { Item, SellerAddress } from '~/types/services/backend';
import { getURLForPublicContent } from '~/utils/components';
import { getURLFriendlyString } from '~/utils/queryParams';

import styles from './index.module.scss';

interface ListItemsItemProps {
  item: Item;
}

const { ROUTES } = CONSTANTS;
const { QUERY_PARAMS } = ROUTES;
const texts = getAvailableI18nTexts();
const { productImageAlt, freeShippingImage } = texts.components.listItems;

const getAddress = (sellerAddress: SellerAddress): string => {
  const { city, state } = sellerAddress;
  return `${state.name}, ${city.name}`;
};

const getIitemLinkDirection = (listItem: Item): string => {
  const queriedTitle = getURLFriendlyString(listItem.title);
  const urlWithId = ROUTES.ITEM.replace(':id', listItem.id);
  return `${urlWithId}?${QUERY_PARAMS.DESCRIPTION}=${queriedTitle}`;
};

export const ListItemsItem = ({ item }: ListItemsItemProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <article key={item.id} className={styles.listItem} data-testid="listItemsItem">
      <figure className={styles.imageContainer} data-testid="listItemsItemImage">
        <Link href={getIitemLinkDirection(item)}>
          <a>
            <Image
              className={styles.image}
              src={item.picture}
              width={160}
              height={160}
              quality={100}
              alt={i18nReplace(t(productImageAlt), item.title)}
            />
          </a>
        </Link>
      </figure>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionUpperPart}>
          <div className={styles.priceAndShippingContainer}>
            <div className={styles.price}>
              <PriceDisplay price={item.price} withDecimals={false} />
            </div>
            <div className={styles.freeShipping}>
              {item.free_shipping || (
                <Image
                  src={getURLForPublicContent('/images/icons/shipping-small.png')}
                  alt={i18nReplace(t(freeShippingImage.alt), item.title)}
                  height={16}
                  title={t(freeShippingImage.title)}
                  width={16}
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
  );
};

export default ListItemsItem;
