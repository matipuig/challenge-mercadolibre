/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import styles from './index.module.scss';

export const Footer = (): ReactElement => {
  // TODO: ESTO MAS LINDO
  const authorName = `Matías Puig`;
  return (
    <footer className={styles.footer}>
      <div className={styles.authorContainer}>{authorName}</div>
    </footer>
  );
};

export default Footer;
