/**
 * Contains the items page of the app.
 */

import { Fragment, useEffect } from 'react';

import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import { Breadcrumbs } from '~/components/Pages/Common/Breadcrumbs';
import { ListItems } from '~/components/Pages/Items/ListItems';
import { NoResults } from '~/components/Pages/Items/NoResults';
import { CONSTANTS } from '~/constants';
import { searchProductsByQuery } from '~/services/backend';
import { getDispatcher, dispatchSearchResults } from '~/state/hooks/searchResults';
import { SearchResultWithCategories } from '~/types/services/backend';
import { getQueryParamValue, getQueryParamValueAsPositiveInteger } from '~/utils/queryParams';

// TODO: USE I18N.

interface ItemsPageProps {
  searchResult: SearchResultWithCategories;
}

export const getServerSideProps: GetServerSideProps<ItemsPageProps> = async (context) => {
  const { query } = context;
  const { DEFAULT_LIMIT_COUNT } = CONSTANTS.SERVICES.BACKEND.SEARCH;
  const q = getQueryParamValue(query, 'search');
  const category = getQueryParamValue(query, 'category');
  const limit = getQueryParamValueAsPositiveInteger(query, 'limit') || DEFAULT_LIMIT_COUNT;
  const offset = getQueryParamValueAsPositiveInteger(query, 'offset');
  const searchResult = await searchProductsByQuery({ q, limit, offset, category });
  return { props: { searchResult } };
};

export const ItemsPage = (props: ItemsPageProps) => {
  const { items, categories } = props.searchResult;
  const dispatcher = getDispatcher();
  useEffect(() => {
    dispatchSearchResults(dispatcher, props.searchResult);
  }, []);

  const itemsCount = items.length;
  return (
    <Fragment>
      <NextSeo title="Title" description="Description" />
      <Breadcrumbs categories={categories} />
      {itemsCount === 0 ? <NoResults /> : <ListItems items={items} />}
    </Fragment>
  );
};

export default ItemsPage;
