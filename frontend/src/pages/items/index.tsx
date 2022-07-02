/**
 * Contains the items page of the app.
 */

import { Fragment, useEffect } from 'react';

import { isNull } from 'lodash';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { Breadcrumbs } from '~/components/Pages/Common/Breadcrumbs';
import { ErrorPageContent } from '~/components/Pages/Error/ErrorPageContent';
import { ListItems } from '~/components/Pages/Items/ListItems';
import { NoResults } from '~/components/Pages/Items/NoResults';
import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { searchProductsByQuery } from '~/services/backend';
import { getDispatcher, dispatchSearchResults } from '~/state/hooks/searchResults';
import { SearchResultWithCategories } from '~/types/services/backend';
import { getURLForPublicContent } from '~/utils/components';
import { logger, LABELS } from '~/utils/logger';
import { getQueryParamValue, getQueryParamValueAsPositiveInteger } from '~/utils/queryParams';

interface ItemsPageProps {
  searchResult: SearchResultWithCategories | null;
}

const { DEFAULT_LIMIT_COUNT, MAX_LIMIT_COUNT } = CONSTANTS.SERVICES.BACKEND.SEARCH;
const texts = getAvailableI18nTexts();
const { title, description } = texts.pages.items;

export const getServerSideProps: GetServerSideProps<ItemsPageProps> = async (context) => {
  try {
    const { SEARCH, LIMIT, CATEGORY, OFFSET } = CONSTANTS.ROUTES.QUERY_PARAMS;
    const { query } = context;
    const q = getQueryParamValue(query, SEARCH);
    const category = getQueryParamValue(query, CATEGORY);
    const limitInQuery = getQueryParamValueAsPositiveInteger(query, LIMIT) || DEFAULT_LIMIT_COUNT;
    const limit = limitInQuery < MAX_LIMIT_COUNT ? limitInQuery : DEFAULT_LIMIT_COUNT;
    const offset = getQueryParamValueAsPositiveInteger(query, OFFSET);
    const searchResult = await searchProductsByQuery({ q, limit, offset, category });
    return { props: { searchResult } };
  } catch (error) {
    const err = error as Error;
    logger.error(err.message, LABELS.RENDERING, { error });
    return { props: { searchResult: null } };
  }
};

export const ItemsPage = (props: ItemsPageProps) => {
  const { t } = useTranslation();
  const dispatcher = getDispatcher();
  const { searchResult } = props;
  useEffect(() => {
    if (!isNull(searchResult)) {
      dispatchSearchResults(dispatcher, searchResult);
    }
  }, []);

  if (isNull(searchResult)) {
    return (
      <Fragment>
        <NextSeo noindex />
        <ErrorPageContent />
      </Fragment>
    );
  }
  const { categories, items } = searchResult;
  if (items.length === 0) {
    return (
      <Fragment>
        <NextSeo noindex />
        <NoResults />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <NextSeo
        title={t(title)}
        description={t(description)}
        openGraph={{
          type: 'website',
          title: t(title),
          description: t(description),
          images: [
            {
              secureUrl: getURLForPublicContent('/images/logos/logo-medium.png'),
              url: getURLForPublicContent('/images/logos/logo-medium.png'),
              width: 106,
              height: 72,
              alt: t(description),
            },
          ],
        }}
      />
      <Breadcrumbs categories={categories} />
      <ListItems items={items} />
    </Fragment>
  );
};

export default ItemsPage;
