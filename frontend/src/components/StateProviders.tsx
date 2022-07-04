/**
 * Gives all state providers to the children.
 */

import { PropsWithChildren } from 'react';

import {
  SearchResultsProvider,
  initialState as SearchResultsInitialState,
} from '~/state/contexts/searchResults';

export const StateProviders = ({ children }: PropsWithChildren<unknown>) => (
  <SearchResultsProvider value={{ ...SearchResultsInitialState }}>{children}</SearchResultsProvider>
);
