/**
 * Contains the hooks to interact with the search results context.
 */
import { Dispatch, useContext } from 'react';

import { isUndefined } from 'lodash';

import { SearchResultsContext } from '~/state/contexts/searchResults';
import { Author, Item, ItemCategory, SearchResultWithCategories } from '~/types/services/backend';
import { SearchResultsState, SearchResultsStateActions } from '~/types/state/searchResults';

const useGetContext = (): SearchResultsState => {
  const context = useContext(SearchResultsContext);
  if (isUndefined(context)) {
    throw new Error(`Getters with contexts must be used inside the providers.`);
  }
  return context;
};

/**
 * Returns the author.
 */
export const useGetAuthor = (): Author => useGetContext().author;

/**
 * Returns the items.
 */
export const useGetItems = (): Item[] => useGetContext().items;

/**
 * Returns the categories.
 */
export const useGetCategories = (): ItemCategory[] => useGetContext().categories;

/**
 * Returns the dispatcher.
 */
export const useGetDispatcher = (): Dispatch<SearchResultsStateActions> => useGetContext().dispatch;

/**
 * Dispatches the new search results.
 * @param dispatcher Dispatcher of the context.
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
