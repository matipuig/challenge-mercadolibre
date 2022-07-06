/**
 * Gives all state providers to the children.
 */

import { PropsWithChildren } from 'react';

import { SearchResultsProvider } from '~/state/contexts/searchResults';

export const StateProviders = ({ children }: PropsWithChildren<unknown>) => (
  <SearchResultsProvider>{children}</SearchResultsProvider>
);
