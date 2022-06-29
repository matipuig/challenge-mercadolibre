/**
 * Contains the no results screen.
 */
import { ReactElement } from 'react';

import styles from './index.module.scss';

export const NoResults = (): ReactElement => (
  <div className={styles.noResultsContainer}>{' // TODO: NO HAY RESULTADOS'}</div>
);

export default NoResults;
