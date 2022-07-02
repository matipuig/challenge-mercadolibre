/**
 * Contains the breadcrumbs component.
 */
import { Fragment, ReactElement } from 'react';

import { t } from 'i18next';
import Link from 'next/link';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { ItemCategory } from '~/types/services/backend';
import { getURLFriendlyString } from '~/utils/queryParams';

import styles from './index.module.scss';

interface BreadcrumbProps {
  categories: ItemCategory[];
}

const { ROUTES } = CONSTANTS;
const texts = getAvailableI18nTexts();
const { ariaLabel } = texts.components.common.breadcrumbs;

const getDestinationRoute = (category: ItemCategory): string => {
  const { id, name } = category;
  const queryParams = new URLSearchParams();
  const friendlyCategoryName = getURLFriendlyString(name);
  queryParams.set('category', id);
  queryParams.set('description', friendlyCategoryName);
  return `${ROUTES.ITEMS}?${queryParams}`;
};

export const Breadcrumbs = ({ categories }: BreadcrumbProps): ReactElement => {
  const lastCategoryIndex = categories.length - 1;
  return (
    <nav className={styles.breadcrumbsContainer}>
      {categories.map((category, i) => (
        <Fragment key={category.id}>
          <Link href={getDestinationRoute(category)}>
            <a
              className={styles.breadcrumb}
              data-testid="breadcrumbLink"
              aria-label={t(ariaLabel.replace('[?]', category.name))}
            >
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
