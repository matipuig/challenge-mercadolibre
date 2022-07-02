/**
 * Contains the general wrapping for the documents.
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { PUBLIC_CONFIG } from '~/config/public';
import { getURLForPublicContent } from '~/utils/components';

export class MyDocument extends Document {
  render() {
    return (
      <Html lang={PUBLIC_CONFIG.LANGUAGE}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href={getURLForPublicContent('favicon.png')} type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
