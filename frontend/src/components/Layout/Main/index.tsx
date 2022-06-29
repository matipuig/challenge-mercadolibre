/**
 * Contains the main container.
 */
import { PropsWithChildren, ReactElement } from 'react';
import styles from './index.module.scss';

export const Main = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.componentsContainer}>{children}</div>
    </main>
  );
};

export default Main;
