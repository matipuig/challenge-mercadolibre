/**
 * Contains the main page of the app.
 */

import { Fragment, useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import CONSTANTS from '~/constants';
import backend from '~/services/backend';
import { FunctionalComponent } from '~/types/react';
import { SearchResultWithCategories } from '~/types/services/backend';
import { SearchResultsContext } from '~/state/contexts/searchResults';
import { getQueryParamValue, getQueryParamValueAsPositiveInteger } from '~/utils/queryParams';

// TODO: USE I18N.

export const getServerSideProps: GetServerSideProps<SearchResultWithCategories> = async (
  context,
) => {
  const { query } = context;
  const { DEFAULT_LIMIT_COUNT } = CONSTANTS.SERVICES.BACKEND.SEARCH;
  const q = getQueryParamValue(query, 'search');
  const limit = getQueryParamValueAsPositiveInteger(query, 'limit') || DEFAULT_LIMIT_COUNT;
  const offset = getQueryParamValueAsPositiveInteger(query, 'offset');
  const result = await backend.searchProductsByQuery({ q, limit, offset });
  return { props: result };
};

/**
 * Home Page component.
 */
export const HomePage: FunctionalComponent<SearchResultWithCategories> = (props) => {
  const { dispatch } = useContext(SearchResultsContext);
  const { items } = props;
  useEffect(() => {
    dispatch({ type: 'SET', payload: props });
  }, [props]);
  return (
    <Fragment>
      <NextSeo title={'Title'} description={'Description'} />
      {items.map((e, i) => (
        <div key={i}>{JSON.stringify(e)}</div>
      ))}
    </Fragment>
  );
};

export default HomePage;
