/**
 * Contains the no results solution.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';

import styles from './index.module.scss';

const texts = getAvailableI18nTexts();
const { mainText, textAdvice } = texts.components.listItems.noResults;

export const NoResults = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} data-testid="noResultsComponent">
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={getURLForPublicContent('/images/pictures/noResults.svg')}
          width={250}
          height={100}
          alt=""
          quality={100}
        />
      </div>
      <h3 className={styles.mainText}>{t(mainText)}</h3>
      <p className={styles.textAdvice}>{t(textAdvice)}</p>
    </section>
  );
};
