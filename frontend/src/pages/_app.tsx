/**
 * Main app container.
 * Should have all the main functionalities like loading things from APIs etc in the useEffect.
 */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { Providers } from '~/components/Providers';
import { FunctionalComponent } from '~/types/react';
import '~/scss/globals.scss';

const MyApp: FunctionalComponent<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // TODO: Improve this.
  }, []);
  return (
    <Providers>
      <Component {...pageProps} />;
    </Providers>
  );
};

export default MyApp;
