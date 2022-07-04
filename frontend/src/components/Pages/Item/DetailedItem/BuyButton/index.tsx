/**
 *  Contains the buy button.
 */

import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import swal from 'sweetalert2';

import { getAvailableI18nTexts, i18nReplace } from '~/i18n';
import { DetailedItem } from '~/types/services/backend';

import styles from './index.module.scss';

interface BuyButtonProps {
  detailedItem: DetailedItem;
}

const texts = getAvailableI18nTexts();
const { caption, onClickText } = texts.components.item.detailedItem.buyButton;

const handleSubmit = (successText: string): void => {
  swal.fire({
    icon: 'success',
    title: successText,
    showConfirmButton: true,
  });
};

export const BuyButton = ({ detailedItem }: BuyButtonProps): ReactElement => {
  const { t } = useTranslation();
  const { title } = detailedItem;
  const successText = i18nReplace(t(onClickText), title);
  return (
    <button
      type="button"
      name="buy"
      onClick={() => handleSubmit(successText)}
      className={styles.button}
      data-testid="buyButton"
    >
      {t(caption)}
    </button>
  );
};
