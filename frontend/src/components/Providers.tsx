/**
 * Gives all providers to the children.
 */

import {
  SearchResultsProvider,
  initialState as SearchResultsInitialState,
} from '~/state/contexts/searchResults';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => (
  <SearchResultsProvider value={{ ...SearchResultsInitialState }}>{children}</SearchResultsProvider>
);

export default { Providers };
