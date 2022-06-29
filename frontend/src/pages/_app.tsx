/**
 * Main app container.
 * Should have all the main functionalities like loading things from APIs etc in the useEffect.
 */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '~/components/Layout';
import { Providers } from '~/components/Providers';
import { FunctionalComponent } from '~/types/react';
import '~/scss/globals.scss';

const MyApp: FunctionalComponent<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // TODO: Do whatever you should do when your app starts.
  }, []);
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default MyApp;
