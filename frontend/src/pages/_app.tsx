/**
 * Main app container.
 * Should have all the main functionalities like loading things from APIs etc in the useEffect.
 */
import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';

import { ErrorBoundary } from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';
import { Providers } from '~/components/Providers';
import { i18n } from '~/i18n';
import '~/scss/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // TODO: Do whatever you should do when your app starts.
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <Providers>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </ErrorBoundary>
    </I18nextProvider>
  );
};

export default MyApp;
