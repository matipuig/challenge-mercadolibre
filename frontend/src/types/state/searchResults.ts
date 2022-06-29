/**
 * Contains the types of the search results state.
 */

import { Dispatch } from 'react';

import { SearchResultWithCategories } from '~/types/services/backend';

import { DispachableStateAction } from './common';

export interface SearchResultsState extends SearchResultWithCategories {
  dispatch: Dispatch<SearchResultsStateActions>;
}

export type SetSearchResultsAction = DispachableStateAction<'SET', SearchResultWithCategories>;

export type EmptyAction = DispachableStateAction<'EMPTY', null>;

export type SearchResultsStateActions = SetSearchResultsAction | EmptyAction;
