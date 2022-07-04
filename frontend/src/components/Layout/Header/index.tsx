/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';

import styles from './index.module.scss';
import { SearchTextForm } from './SearchTextForm';

const { ROUTES } = CONSTANTS;
const texts = getAvailableI18nTexts();

export const Header = (): ReactElement => {
  const [t] = useTranslation();
  const { logo } = texts.components.layout.header;
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.controlsContainer}>
        <Link href={ROUTES.MAIN}>
          <a aria-label={t(logo.alt)}>
            <div className={styles.logo}>
              <Image
                alt={t(logo.alt)}
                aria-hidden="true"
                height={52}
                quality={100}
                src={getURLForPublicContent('/images/logos/logo-medium.png')}
                width={76}
                data-testid="logo"
              />
            </div>
          </a>
        </Link>
        <div className={styles.searchTextForm}>
          <SearchTextForm />
        </div>
      </div>
    </header>
  );
};
