/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import { getAuthor } from '~/state/hooks/searchResults';

import styles from './index.module.scss';

export const Footer = (): ReactElement => {
  const { name, lastname } = getAuthor();
  const authorName = `${name} ${lastname}`;
  return (
    <footer className={styles.footer}>
      <div className={styles.authorContainer}>{authorName}</div>
    </footer>
  );
};

export default Footer;
