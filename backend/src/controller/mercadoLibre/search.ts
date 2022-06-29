/**
 * Executes products search in MercadoLibre.
 */
/* eslint-disable camelcase */

import { isNull, isString, isUndefined } from 'lodash';
import mercadoLibreService from '~/services/mercadoLibre';
import { ItemCategory, SearchParams, SearchResultWithCategories } from '~/types/MercadoLibre';
import { MELISeachByQueryResults } from '~/types/services/MercadoLibre/SearchResult';
import { extractInformationFromProductResult, getAuthor, getCategoryBreadcrumb } from './common';

const getCategoryIdFromAppliedFilter = (searchResults: MELISeachByQueryResults): string | null => {
  const { filters } = searchResults;
  const appliedFilter = filters.find((e) => e.id === 'category');
  if (isUndefined(appliedFilter)) {
    return null;
  }
  if (appliedFilter.values.length === 0) {
    return null;
  }
  return appliedFilter.values[0].id;
};

const getCategoryIdFromAvailableFiltersByMaxResultsCount = (
  searchResults: MELISeachByQueryResults,
): string | null => {
  const { available_filters } = searchResults;
  const availableCategoryFilter = available_filters.find((e) => e.id === 'category');
  if (isUndefined(availableCategoryFilter)) {
    return null;
  }
  const { values } = availableCategoryFilter;
  if (values.length === 0) {
    return null;
  }
  const resultCounts = values.map((e) => e.results || 0);
  const maxResultCount = Math.max(...resultCounts);
  const filterWithMostResults = values.find((e) => e.results === maxResultCount);
  if (isUndefined(filterWithMostResults)) {
    return null;
  }
  return filterWithMostResults.id;
};

const getCategoryBreadcrumbBySearchResult = async (
  searchResults: MELISeachByQueryResults,
): Promise<ItemCategory[]> => {
  try {
    // If all the results belongs to the same filter. The category appears in "filters".
    const appliedFilterCategoryId = getCategoryIdFromAppliedFilter(searchResults);
    if (isString(appliedFilterCategoryId)) {
      return getCategoryBreadcrumb(appliedFilterCategoryId);
    }
    // Otherwise, they appear in available filters. We choose the one with the highest results count.
    const availableFilterCategoryId =
      getCategoryIdFromAvailableFiltersByMaxResultsCount(searchResults);
    if (isNull(availableFilterCategoryId)) {
      return [];
    }
    return getCategoryBreadcrumb(availableFilterCategoryId);
  } catch (error) {
    throw error;
  }
};

/**
 * Executes a search in MeLi API and returns the results.
 * @param searchParams Params of the searched results.
 */
export const getItemsBySearch = async (
  searchParams: SearchParams,
): Promise<SearchResultWithCategories> => {
  try {
    const author = getAuthor();
    const searchResult = await mercadoLibreService.searchProductsByQuery(searchParams);
    const items = searchResult.results.map(extractInformationFromProductResult);
    const categories = await getCategoryBreadcrumbBySearchResult(searchResult);
    return { author, categories, items };
  } catch (error) {
    throw error;
  }
};

export default { getItemsBySearch };
