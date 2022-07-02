/**
 * Contains the 404 error page.
 */

import { Fragment } from 'react';

import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { NotFound } from '~/components/Pages/NotFound';
import { getAvailableI18nTexts } from '~/i18n';

const texts = getAvailableI18nTexts();
const { title, description } = texts.pages.error404;

export const Error404Page = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NextSeo title={t(title)} description={t(description)} />
      <NotFound />
    </Fragment>
  );
};

export default Error404Page;
