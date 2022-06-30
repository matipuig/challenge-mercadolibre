/**
 *  Contains the buy button.
 */
import { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import swal from 'sweetalert2';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { getAvailableI18nTexts } from '~/i18n';
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
  const successText = t(onClickText).replace('[?]', title);
  return (
    <button type="button" onClick={() => handleSubmit(successText)} className={styles.button}>
      {t(caption)}
    </button>
  );
};

export default BuyButton;
