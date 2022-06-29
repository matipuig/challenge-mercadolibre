/**
 * Contains the detailed item page of the app.
 */

import { Fragment } from 'react';

import { isNull } from 'lodash';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import { Breadcrumbs } from '~/components/Pages/Common/Breadcrumbs';
import { getItemById } from '~/services/backend';
import { DetailedItem } from '~/types/services/backend';
import { getQueryParamValue } from '~/utils/queryParams';

// TODO: USE I18N.

interface DetailedItemPageProps {
  detailedItem: DetailedItem | null;
}

export const getServerSideProps: GetServerSideProps<DetailedItemPageProps> = async (context) => {
  const { query } = context;
  const itemId = getQueryParamValue(query, 'itemId') || '';
  const itemResult = await getItemById(itemId);
  const detailedItem = isNull(itemResult) ? null : itemResult?.item;
  return { props: { detailedItem } };
};

export const DetailedItemPage = (props: DetailedItemPageProps) => {
  const { detailedItem } = props;
  if (isNull(detailedItem)) {
    return ' // TODO: no existe';
  }
  return (
    <Fragment>
      <NextSeo title="Title" description="Description" />
      <Breadcrumbs categories={detailedItem.categories} />
      {JSON.stringify(detailedItem)}
    </Fragment>
  );
};

export default DetailedItemPage;
