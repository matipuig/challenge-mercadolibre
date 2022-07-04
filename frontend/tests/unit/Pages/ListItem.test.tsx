/**
 * Contains the unit tests for not found content.
 */
import { ParsedUrlQuery } from 'querystring';

import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GetServerSidePropsContext } from 'next';

import ListItemsItem, { getServerSideProps } from '../../../src/pages/items/[itemId]';
import { silenceLogger } from '../../utils';
import { mockedDetailedItem } from '../__mocks__/backend/detailedItem';
import '../axiosMockAdapter';

const { id } = mockedDetailedItem.item;

describe('ListItemsItem', () => {
  let listItemsItem: RenderResult;

  beforeEach(async () => {
    silenceLogger();
    const context = {
      query: { id } as ParsedUrlQuery,
    };
    const serverSidePropsContext = await getServerSideProps(context as GetServerSidePropsContext);
    listItemsItem = render(
      <ListItemsItem
        {...serverSidePropsContext}
        detailedItem={mockedDetailedItem.item}
        errored={false}
      />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(listItemsItem.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(listItemsItem).toMatchSnapshot();
  });

  it('should show breadcrumbs.', () => {
    const breadcrumbs = listItemsItem.getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeDefined();
  });

  it('should show detailed item.', () => {
    const detailedItem = listItemsItem.getByTestId('detailedItem');
    expect(detailedItem).toBeDefined();
  });
});
