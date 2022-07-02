/**
 * Contains the home main page of the app.
 */

import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';

const texts = getAvailableI18nTexts();
const { title, description } = texts.pages.home;

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <NextSeo
      title={t(title)}
      description={t(description)}
      openGraph={{
        type: 'website',
        title: t(title),
        description: t(description),
        images: [
          {
            url: getURLForPublicContent('/images/logos/logo-medium.png'),
            secureUrl: getURLForPublicContent('/images/logos/logo-medium.png'),
            width: 106,
            height: 72,
            alt: t(description),
          },
        ],
      }}
    />
  );
};

export default HomePage;
