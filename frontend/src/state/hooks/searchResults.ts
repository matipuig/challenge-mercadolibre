/**
 * Contains the hooks to interact with the search results context.
 */

import { isUndefined } from 'lodash';
import { useContext } from 'react';

import { SearchResultsContext } from '~/state/contexts/searchResults';
import { Author, Item, SearchResultWithCategories } from '~/types/services/backend';

const getContext = (): SearchResultWithCategories => {
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
