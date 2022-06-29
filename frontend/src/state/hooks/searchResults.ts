/**
 * Contains the hooks to interact with the search results context.
 */

import { isUndefined } from 'lodash';
import { Dispatch, useContext } from 'react';

import { SearchResultsContext } from '~/state/contexts/searchResults';
import { Author, Item, SearchResultWithCategories } from '~/types/services/backend';
import { SearchResultsState, SearchResultsStateActions } from '~/types/state/searchResults';

type SearchResultsDispatcher = (searchResults: SearchResultWithCategories) => void;

const getContext = (): SearchResultsState => {
  const context = useContext(SearchResultsContext);
  if (isUndefined(context)) {
    throw new Error(`Getters with contexts must be used inside the providers.`);
  }
  return context;
};

/**
 * Returns the author.
 */
export const getAuthor = (): Author => getContext().author;

/**
 * Returns the items.
 */
export const getItems = (): Item[] => getContext().items;

/**
 * Returns the categories.
 */
export const getCategories = (): string[] => getContext().categories;

/**
 * Returns the dispatcher.
 */
export const getDispatcher = (): Dispatch<SearchResultsStateActions> => getContext().dispatch;

/**
 * Dispatches the new search results.
 * @param dispatch Dispatcher of the context.
 * @param searchResults New search results to set.
 */
export const dispatchSearchResults = (
  dispatcher: Dispatch<SearchResultsStateActions>,
  searchResults: SearchResultWithCategories,
): void => {
  dispatcher({ type: 'SET', payload: searchResults });
};

/**
 * Dispatches the empty order.
 * @param dispatch Dispatcher of the context.
 */
export const dispatchEmpty = (dispatcher: Dispatch<SearchResultsStateActions>): void => {
  dispatcher({ type: 'EMPTY', payload: null });
};
