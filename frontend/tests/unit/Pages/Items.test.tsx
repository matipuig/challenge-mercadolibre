/**
 * Contains the unit tests for the list items page.
 */
import { ParsedUrlQuery } from 'querystring';

import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GetServerSidePropsContext } from 'next';

import Items, { getServerSideProps } from '../../../src/pages/items';
import { silenceLogger } from '../../utils';
import { mockedSearchResults } from '../__mocks__/backend/searchResult';
import '../axiosMockAdapter';

describe('Items', () => {
  let items: RenderResult;

  beforeEach(async () => {
    silenceLogger();
    const context = {
      query: { search: 'anything' } as ParsedUrlQuery,
    };
    const serverSidePropsContext = await getServerSideProps(context as GetServerSidePropsContext);
    items = render(<Items {...serverSidePropsContext} searchResult={mockedSearchResults} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(items.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(items).toMatchSnapshot();
  });

  it('should show breadcrumbs.', () => {
    const breadcrumbs = items.getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeDefined();
  });

  it('should show list items.', () => {
    const listItems = items.getAllByTestId('listItemsItem');
    const expectedLength = mockedSearchResults.items.length;
    expect(listItems).toHaveLength(expectedLength);
  });
});
