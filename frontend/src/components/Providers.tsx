/**
 * Gives all providers to the children.
 */

import { PropsWithChildren } from 'react';

import {
  SearchResultsProvider,
  initialState as SearchResultsInitialState,
} from '~/state/contexts/searchResults';

export const Providers = ({ children }: PropsWithChildren) => (
  <SearchResultsProvider value={{ ...SearchResultsInitialState }}>{children}</SearchResultsProvider>
);

export default { Providers };
