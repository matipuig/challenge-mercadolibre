/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CONSTANTS } from '~/constants';

import styles from './index.module.scss';
import { SearchTextForm } from './SearchTextForm';

const { ROUTES } = CONSTANTS;

// TODO: Update the image to work in a subserver.

export const Header = (): ReactElement => (
  <header className={styles.header}>
    <div className={styles.controlsContainer}>
      <Link href={ROUTES.MAIN}>
        <a>
          <div className={styles.logo}>
            <Image src="/logos/logo-medium.png" width={50} height={34} />
          </div>
        </a>
      </Link>
      <div className={styles.searchTextForm}>
        <SearchTextForm />
      </div>
    </div>
  </header>
);

export default Header;
