/**
 * Contains the no results solution.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';

import styles from './index.module.scss';

export const NoResults = (): ReactElement => {
  const { t } = useTranslation();
  const texts = getAvailableI18nTexts();
  const { mainText, linkToMainManu } = texts.components.listItems.noResults;
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={getURLForPublicContent('/images/pictures/noResults.svg')}
          width={250}
          height={100}
          alt=""
        />
      </div>
      <h3 className={styles.mainText}>{t(mainText)}</h3>
      <p className={styles.textAdvice}>
        <a>{t(linkToMainManu)}</a>
      </p>
    </section>
  );
};

export default NoResults;
