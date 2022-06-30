/**
 * Contains the detailed item component.
 */
import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';
import { DetailedItem as DetailedItemType, Price } from '~/types/services/backend';
import { makeHumanFriendly } from '~/utils/conversors';

import { BuyButton } from './BuyButton';
import styles from './index.module.scss';
import { PicturesContainer } from './PicturesContainer';

interface DetailedItemProps {
  detailedItem: DetailedItemType;
}

const texts = getAvailableI18nTexts();
const { conditionAndSoldCount, descriptionLabel, picturesAlt } = texts.components.item.detailedItem;

const getPrice = (price: Price): string => {
  const { currency, amount } = price;
  const currencySign = currency !== 'ARS' ? currency : '$';
  const humanFriendlyAmount = makeHumanFriendly(amount);
  return `${currencySign} ${humanFriendlyAmount}`;
};

const getDecimals = (decimals: number): string => {
  const strDecimals = decimals.toString();
  return strDecimals.length < 2 ? `0${strDecimals}` : strDecimals;
};

export const DetailedItem = ({ detailedItem }: DetailedItemProps): ReactElement => {
  const { t } = useTranslation();
  const itemCondition = detailedItem.condition;
  const strSoldQuantity = detailedItem.sold_quantity.toString();
  return (
    <section>
      <article className={styles.container}>
        <div className={styles.mainInfoContainer}>
          <div className={styles.picturesContainer}>
            <PicturesContainer
              pictures={detailedItem.all_pictures}
              altText={t(picturesAlt).replace('[?]', detailedItem.title)}
            />
          </div>
          <div className={styles.informationContainer}>
            <div className={styles.conditionAndSoldCount}>
              {`${
                itemCondition === 'new'
                  ? t(conditionAndSoldCount.new.replace('[?]', strSoldQuantity))
                  : t(conditionAndSoldCount.used.replace('[?]', strSoldQuantity))
              }`}
            </div>
            <h1 className={styles.title}>{detailedItem.title}</h1>
            <div className={styles.price}>
              <span className={styles.amount}>{getPrice(detailedItem.price)}</span>
              <span className={styles.decimals}>
                <sup>{getDecimals(detailedItem.price.decimals)}</sup>
              </span>
            </div>
            <div className={styles.buyButtonContainer}>
              <BuyButton detailedItem={detailedItem} />
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionLabel}>{t(descriptionLabel)}</h2>
          <p className={styles.description}>{detailedItem.description}</p>
        </div>
      </article>
    </section>
  );
};

export default DetailedItem;
