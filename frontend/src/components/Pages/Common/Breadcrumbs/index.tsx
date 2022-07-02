/**
 * Contains the breadcrumbs component.
 */
import { Fragment, ReactElement } from 'react';

import { t } from 'i18next';
import Link from 'next/link';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { ItemCategory } from '~/types/services/backend';

import styles from './index.module.scss';

interface BreadcrumbProps {
  categories: ItemCategory[];
}

const { ROUTES } = CONSTANTS;
const texts = getAvailableI18nTexts();
const { ariaLabel } = texts.components.common.breadcrumbs;

const getDestinationRoute = (categoryId: string): string => {
  const queryParams = new URLSearchParams();
  queryParams.set('category', categoryId);
  return `${ROUTES.ITEMS}?${queryParams}`;
};

export const Breadcrumbs = ({ categories }: BreadcrumbProps): ReactElement => {
  const lastCategoryIndex = categories.length - 1;
  return (
    <nav className={styles.breadcrumbsContainer}>
      {categories.map((category, i) => (
        <Fragment key={category.id}>
          <Link
            href={getDestinationRoute(category.id)}
            aria-label={t(ariaLabel.replace('[?]', category.name))}
          >
            <a className={styles.breadcrumb} data-testid="breadcrumbLink">
              {category.name}
            </a>
          </Link>
          {i < lastCategoryIndex && (
            <div className={styles.separator} aria-hidden>
              &gt;
            </div>
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
