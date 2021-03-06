/**
 * Contains the text search form.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '~/constants';
import { getAvailableI18nTexts } from '~/i18n';
import { getURLForPublicContent } from '~/utils/components';
import { getQueryParamValue } from '~/utils/queryParams';

import styles from './index.module.scss';

interface SearchFormData {
  search: string;
}
const { ROUTES } = CONSTANTS;
const texts = getAvailableI18nTexts();
const { QUERY_PARAMS } = ROUTES;

const getDestinationRoute = (data: SearchFormData): string => {
  const { search } = data;
  const queryParams = new URLSearchParams();
  queryParams.set(QUERY_PARAMS.SEARCH, search);
  return `${ROUTES.ITEMS}?${queryParams}`;
};

export const SearchTextForm = (): ReactElement => {
  const { t } = useTranslation();
  const { placeholder, tooltip } = texts.components.layout.header.searchTextForm;
  const router = useRouter();
  const search = getQueryParamValue(router.query, QUERY_PARAMS.SEARCH) || '';
  const defaultValues = { search };
  const executeSubmit = (data: SearchFormData) => {
    const destination = getDestinationRoute(data);
    router.push(destination);
  };
  const { register, handleSubmit } = useForm({ defaultValues });
  return (
    <form
      onSubmit={handleSubmit(executeSubmit)}
      className={styles.searchForm}
      data-testid="searchTextForm"
    >
      <input type="hidden" value={search} data-testid="originalInputValueFromQuery" />
      <input
        {...register('search')}
        className={styles.searchInputText}
        placeholder={t(placeholder)}
        maxLength={CONSTANTS.SERVICES.BACKEND.SEARCH.MAX_TEXT_LENGTH}
      />
      <button
        type="submit"
        onClick={handleSubmit(executeSubmit)}
        className={styles.searchButton}
        title={t(tooltip)}
      >
        <Image
          src={getURLForPublicContent('/images/icons/search.svg')}
          width={32}
          height={32}
          alt=""
          quality={100}
        />
      </button>
    </form>
  );
};
