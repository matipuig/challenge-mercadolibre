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
import { getQueryParamValue, getQueryParamValueAsPositiveInteger } from '~/utils/queryParams';

const { DEFAULT_LIMIT_COUNT, MAX_LIMIT_COUNT } = CONSTANTS.SERVICES.BACKEND.SEARCH;

interface ItemsPageProps {
  searchResult: SearchResultWithCategories | null;
}

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
    return { props: { searchResult: null } };
  }
};

export const ItemsPage = (props: ItemsPageProps) => {
  const { t } = useTranslation();
  const texts = getAvailableI18nTexts();
  const { title, description } = texts.pages.items;
  const dispatcher = getDispatcher();
  const { searchResult } = props;
  useEffect(() => {
    if (!isNull(searchResult)) {
      dispatchSearchResults(dispatcher, searchResult);
    }
  }, []);

  if (isNull(searchResult)) {
    return <ErrorPageContent />;
  }
  const { categories, items } = searchResult;
  const itemsCount = items.length;
  return (
    <Fragment>
      <NextSeo title={t(title)} description={t(description)} />
      <Breadcrumbs categories={categories} />
      {itemsCount === 0 ? <NoResults /> : <ListItems items={items} />}
    </Fragment>
  );
};

export default ItemsPage;
