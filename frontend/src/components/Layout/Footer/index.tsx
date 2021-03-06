/**
 * Contains the app header.
 */
import { ReactElement } from 'react';

import { CONSTANTS } from '~/constants';

import styles from './index.module.scss';

export const Footer = (): ReactElement => (
  <footer className={styles.footer} data-testid="footer">
    <div className={styles.authorContainer}>{CONSTANTS.AUTHOR}</div>
  </footer>
);
