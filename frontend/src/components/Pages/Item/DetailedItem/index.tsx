/**
 * Contains the detailed item component.
 */

import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { PriceDisplay } from '~/components/Pages/Common/PriceDisplay';
import { getAvailableI18nTexts, i18nReplace } from '~/i18n';
import { DetailedItem as DetailedItemType } from '~/types/services/backend';

import { BuyButton } from './BuyButton';
import styles from './index.module.scss';
import { PicturesContainer } from './PicturesContainer';

interface DetailedItemProps {
  detailedItem: DetailedItemType;
}

const texts = getAvailableI18nTexts();
const { conditionAndSoldCount, descriptionLabel, picturesAlt } = texts.components.item.detailedItem;

export const DetailedItem = ({ detailedItem }: DetailedItemProps): ReactElement => {
  const { t } = useTranslation();
  const itemCondition = detailedItem.condition;
  const soldQuantity = detailedItem.sold_quantity.toString();

  return (
    <section>
      <article className={styles.container} data-testid="detailedItem">
        <div className={styles.mainInfoContainer}>
          <div className={styles.picturesContainer}>
            <PicturesContainer
              pictures={detailedItem.all_pictures}
              altText={i18nReplace(t(picturesAlt), detailedItem.title)}
            />
          </div>
          <div className={styles.informationContainer}>
            <div className={styles.conditionAndSoldCount}>
              {itemCondition === 'new'
                ? i18nReplace(t(conditionAndSoldCount.new), soldQuantity)
                : i18nReplace(t(conditionAndSoldCount.used), soldQuantity)}
            </div>
            <h1 className={styles.title}>{detailedItem.title}</h1>
            <div className={styles.price}>
              <PriceDisplay price={detailedItem.price} withDecimals />
            </div>
            <div className={styles.buyButtonContainer}>
              <BuyButton detailedItem={detailedItem} />
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionLabel}>{t(descriptionLabel)}</h2>
          <p className={styles.description} data-testid="detailedItemDescription">
            {detailedItem.description}
          </p>
        </div>
      </article>
    </section>
  );
};
