/**
 * Contains the app screen layout.
 */

import { Fragment, PropsWithChildren, ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
