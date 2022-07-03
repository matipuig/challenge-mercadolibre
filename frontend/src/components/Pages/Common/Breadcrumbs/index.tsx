/**
 * Contains the breadcrumbs component.
 */
import { Fragment, ReactElement } from 'react';

import { t } from 'i18next';
import Link from 'next/link';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts, i18nReplace } from '~/i18n';
import { ItemCategory } from '~/types/services/backend';
import { getURLFriendlyString } from '~/utils/queryParams';

import styles from './index.module.scss';

interface BreadcrumbProps {
  categories: ItemCategory[];
}

const { ROUTES } = CONSTANTS;
const { QUERY_PARAMS } = ROUTES;
const texts = getAvailableI18nTexts();
const { ariaLabel } = texts.components.common.breadcrumbs;

const getDestinationRoute = (category: ItemCategory): string => {
  const { id, name } = category;
  const queryParams = new URLSearchParams();
  const friendlyCategoryName = getURLFriendlyString(name);
  queryParams.set('category', id);
  return `${ROUTES.ITEMS}?${queryParams}&${QUERY_PARAMS.DESCRIPTION}=${friendlyCategoryName}`;
};

export const Breadcrumbs = ({ categories }: BreadcrumbProps): ReactElement => {
  const lastCategoryIndex = categories.length - 1;
  return (
    <nav className={styles.breadcrumbsContainer} data-testid="breadcrumbs">
      {categories.map((category, i) => (
        <Fragment key={category.id}>
          <Link href={getDestinationRoute(category)}>
            <a
              className={styles.breadcrumb}
              data-testid="breadcrumbLink"
              aria-label={i18nReplace(t(ariaLabel), category.name)}
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
