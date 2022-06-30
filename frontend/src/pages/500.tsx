/**
 * Contains the 500 error page.
 */

import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { ErrorPageContent } from '~/components/Pages/Error/ErrorPageContent';
import { getAvailableI18nTexts } from '~/i18n';

const texts = getAvailableI18nTexts();
const { title, description } = texts.pages.error500;

export const Error500Page = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <NextSeo title={t(title)} description={t(description)} />
      <ErrorPageContent />
    </Fragment>
  );
};

export default Error500Page;
