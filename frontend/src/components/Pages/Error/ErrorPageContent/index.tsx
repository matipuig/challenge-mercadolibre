/**
 * Contains the errored page.
 */
import { ReactElement, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import styles from './index.module.scss';

const { MAIN } = CONSTANTS.ROUTES;
const texts = getAvailableI18nTexts();
const { mainText, linkToMainManu } = texts.components.erroredPageContent;

export const ErrorPageContent = (): ReactElement => {
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    const redirectorTimeout = setTimeout(() => router.replace(MAIN), 3000);
    return () => clearTimeout(redirectorTimeout);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={'/images/pictures/emojiSad.webp'}
          width={250}
          height={100}
          alt={''}
        />
      </div>
      <h3 className={styles.mainText}>{t(mainText)} </h3>
      <p className={styles.linkToMainPageContainer}>
        <Link href={MAIN}>
          <a>{t(linkToMainManu)}</a>
        </Link>
      </p>
    </section>
  );
};

export default ErrorPageContent;
