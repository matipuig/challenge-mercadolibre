/**
 * Contains the no results screen.
 */
import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';
import { Price } from '~/types/services/backend';
import { makeHumanFriendly } from '~/utils/conversors';

import styles from './index.module.scss';

interface PriceDisplayProps {
  price: Price;
  withDecimals?: boolean;
}

const texts = getAvailableI18nTexts();
const { withPesos } = texts.components.common.priceDisplay;

const getDecimals = (decimals: number): string => {
  const strDecimals = decimals.toString();
  return strDecimals.length < 2 ? `0${strDecimals}` : strDecimals;
};

export const PriceDisplay = ({ price, withDecimals }: PriceDisplayProps): ReactElement => {
  const { t } = useTranslation();
  const { amount, decimals, currency } = price;
  const friendlyAmount = makeHumanFriendly(amount);
  const isPesos = currency === 'ARS';
  const currencyDisplay = isPesos ? '$' : currency;
  const ariaLabel = isPesos ? t(withPesos).replace('[?]', `${amount}`) : `${amount} ${currency}`;
  const finalDecimals = getDecimals(decimals);
  return (
    <div className={styles.container} aria-label={ariaLabel}>
      <span className={styles.amount}>
        {currencyDisplay} {friendlyAmount}
      </span>
      {withDecimals && (
        <span aria-hidden className={styles.decimals}>
          <sup>{finalDecimals}</sup>
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;
