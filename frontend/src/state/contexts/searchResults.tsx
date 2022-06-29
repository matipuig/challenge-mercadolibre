/**
 * Contains the search results state management.
 */

import { createContext, PropsWithChildren, useReducer } from 'react';

import { noop } from 'lodash';

import { SearchResultsState, SearchResultsStateActions } from '~/types/state/searchResults';

export const initialState: SearchResultsState = {
  author: { name: '', lastname: '' },
  items: [],
  categories: [],
  dispatch: () => {
    noop();
  },
};

const reducer = (
  state: SearchResultsState,
  action: SearchResultsStateActions,
): SearchResultsState => {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    case 'EMPTY':
      return { ...state, categories: [], items: [] };
    default:
      throw new Error(`Not available method in search results reducer.`);
  }
};

export const SearchResultsContext = createContext<SearchResultsState>(initialState);
SearchResultsContext.displayName = 'SearchResultsContext';

/**
 * Provider to get the state from the search results.
 * @param children Components that are inside of it.
 */
export const SearchResultsProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: SearchResultsState }>) => {
  noop(value);
  const [searchResultsState, dispatch] = useReducer(reducer, initialState);
  const state = { ...searchResultsState, dispatch };
  return (
    /* eslint-disable react/jsx-no-constructed-context-values  */
    <SearchResultsContext.Provider value={{ ...state }}>{children}</SearchResultsContext.Provider>
  );
};

export default { initialState, SearchResultsContext, SearchResultsProvider };
