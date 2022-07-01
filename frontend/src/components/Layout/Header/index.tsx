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

export const Header = (): ReactElement => {
  const [t] = useTranslation();
  const texts = getAvailableI18nTexts();
  const { logo } = texts.components.layout.header;
  return (
    <header className={styles.header}>
      <div className={styles.controlsContainer}>
        <Link href={ROUTES.MAIN}>
          <a>
            <div className={styles.logo}>
              <Image
                alt={t(logo.alt)}
                height={52}
                quality={100}
                src={getURLForPublicContent('/images/logos/logo-medium.png')}
                width={76}
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

export default Header;
