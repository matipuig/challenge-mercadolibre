/**
 * Contains the not found page.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';

import styles from './index.module.scss';

const texts = getAvailableI18nTexts();
const { mainText, linkToMainManu } = texts.components.notFound;

export const NotFound = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={getURLForPublicContent('/images/pictures/notFound.svg')}
          width={250}
          height={100}
          alt=""
          quality={100}
        />
      </div>
      <h3 className={styles.mainText}>{t(mainText)}</h3>
      <p className={styles.linkToMainPageContainer}>
        <Link href={CONSTANTS.ROUTES.MAIN}>
          <a>{t(linkToMainManu)}</a>
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
