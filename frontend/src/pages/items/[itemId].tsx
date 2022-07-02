/**
 * Contains the detailed item page of the app.
 */

import { Fragment } from 'react';

import { isNull } from 'lodash';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import { Breadcrumbs } from '~/components/Pages/Common/Breadcrumbs';
import { ErrorPageContent } from '~/components/Pages/Error/ErrorPageContent';
import { DetailedItem as DetailedItemComponent } from '~/components/Pages/Item/DetailedItem';
import { NotFound } from '~/components/Pages/NotFound';
import { getItemById } from '~/services/backend';
import { DetailedItem } from '~/types/services/backend';
import { logger, LABELS } from '~/utils/logger';
import { getQueryParamValue } from '~/utils/queryParams';

interface DetailedItemPageProps {
  detailedItem: DetailedItem | null;
  errored: boolean;
}

export const getServerSideProps: GetServerSideProps<DetailedItemPageProps> = async (context) => {
  try {
    const { query } = context;
    const itemId = getQueryParamValue(query, 'itemId') || '';
    const itemResult = await getItemById(itemId);
    const detailedItem = isNull(itemResult) ? null : itemResult?.item;
    return { props: { detailedItem, errored: false } };
  } catch (error) {
    const err = error as Error;
    logger.error(err.message, LABELS.RENDERING, { error });
    return { props: { detailedItem: null, errored: true } };
  }
};

export const DetailedItemPage = (props: DetailedItemPageProps) => {
  const { detailedItem, errored } = props;
  if (errored) {
    return <ErrorPageContent />;
  }
  if (isNull(detailedItem)) {
    return <NotFound />;
  }

  const [firstPicure] = detailedItem.all_pictures;
  return (
    <Fragment>
      <NextSeo
        title={detailedItem.title}
        description={detailedItem.description}
        openGraph={{
          type: 'website',
          title: detailedItem.title,
          description: detailedItem.description,
          images: [
            {
              url: firstPicure.url,
              width: firstPicure.width,
              height: firstPicure.height,
              alt: detailedItem.description,
            },
          ],
        }}
      />
      <Breadcrumbs categories={detailedItem.categories} />
      <DetailedItemComponent detailedItem={detailedItem} />
    </Fragment>
  );
};

export default DetailedItemPage;
