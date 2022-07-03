/**
 * Contains the main container.
 */
import { PropsWithChildren, ReactElement } from 'react';

import styles from './index.module.scss';

export const Main = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <main className={styles.main} data-testid="main">
    <div className={styles.componentsContainer}>{children}</div>
  </main>
);

export default Main;
