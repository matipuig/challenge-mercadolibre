/**
 * Contains the app screen layout.
 */

import { Fragment, PropsWithChildren, ReactElement } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = ({ children }: PropsWithChildren): ReactElement => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
);

export default Layout;
