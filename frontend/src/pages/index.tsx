/**
 * Contains the home main page of the app.
 */

import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';

export const HomePage = () => {
  const { t } = useTranslation();
  const texts = getAvailableI18nTexts();
  const { title, description } = texts.pages.home;
  return <NextSeo title={t(title)} description={t(description)} />;
};

export default HomePage;
