/**
 * Contains the text search form.
 */
import { Fragment, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CONSTANTS from '~/constants';
import { getQueryParamValue } from '~/utils/queryParams';
import styles from './index.module.scss';

const { ROUTES } = CONSTANTS;

interface SearchFormData {
  search: string;
}

const getDestinationRoute = (data: SearchFormData): string => {
  const { search } = data;
  const queryParams = new URLSearchParams();
  queryParams.set('search', search);
  return `${ROUTES.MAIN}?${queryParams}`;
};

export const SearchTextForm = (): ReactElement => {
  const router = useRouter();
  const search = getQueryParamValue(router.query, 'search') || '';
  const defaultValues = { search };
  const executeSubmit = (data: SearchFormData) => {
    const destination = getDestinationRoute(data);
    router.push(destination);
  };
  const { register, handleSubmit } = useForm({ defaultValues });
  return (
    <Fragment>
      <form onSubmit={handleSubmit(executeSubmit)} className={styles.searchForm}>
        <input
          {...register('search')}
          className={styles.searchInputText}
          placeholder="// TODO: HAGA SU BUSQUEDA"
        />
        <div className={styles.searchButtonContainer}>
          <button onClick={handleSubmit(executeSubmit)} className={styles.searchButton}>
            <Image src={'/icons/search-medium.png'} width={16} height={16} />
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchTextForm;
