/**
 * Contains the breadcrumbs component.
 */
import { Fragment, ReactElement } from 'react';
import Link from 'next/link';

import CONSTANTS from '~/constants';
import { ItemCategory } from '~/types/services/backend';
import styles from './index.module.scss';

interface BreadcrumbProps {
  categories: ItemCategory[];
}

const { ROUTES } = CONSTANTS;

const getDestinationRoute = (categoryId: string): string => {
  const queryParams = new URLSearchParams();
  queryParams.set('category', categoryId);
  return `${ROUTES.MAIN}?${queryParams}`;
};

export const Breadcrumbs = ({ categories }: BreadcrumbProps): ReactElement => {
  const lastCategoryIndex = categories.length - 1;
  return (
    <div className={styles.breadcrumbsContainer}>
      {categories.map((e, i) => (
        <Fragment key={e.id}>
          <Link href={getDestinationRoute(e.id)}>
            <a className={styles.breadcrumb}>{e.name}</a>
          </Link>
          {i < lastCategoryIndex && <div className={styles.separator}>&gt;</div>}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
