/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CONSTANTS from '~/constants';
import SearchTextForm from './SearchTextForm';
import styles from './index.module.scss';

const { ROUTES } = CONSTANTS;

// TODO: Update the image to work in a subserver.

export const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.controlsContainer}>
        <Link href={ROUTES.MAIN}>
          <a>
            <div className={styles.logo}>
              <Image src={'/logos/logo-medium.png'} width={75} height={30} />
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
