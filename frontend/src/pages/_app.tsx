/**
 * Main app container.
 * Should have all the main functionalities like loading things from APIs etc in the useEffect.
 */

import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';

/*  eslint-disable import/no-named-as-default */
import ErrorBoundary from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';
import { StateProviders } from '~/components/StateProviders';
import { i18n } from '~/i18n';
import '~/scss/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <I18nextProvider i18n={i18n}>
    <ErrorBoundary>
      <StateProviders>
        {}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProviders>
    </ErrorBoundary>
  </I18nextProvider>
);

export default MyApp;
