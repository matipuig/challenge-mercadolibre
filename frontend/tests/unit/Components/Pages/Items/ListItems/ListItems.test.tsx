/**
 * Contains the unit tests for the list items.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ListItems } from '../../../../../../src/components/Pages/Items/ListItems';
import { mockedListItems } from '../../../../__mocks__/listItems';

describe('List items component', () => {
  let listItems: RenderResult;

  beforeEach(() => {
    listItems = render(<ListItems items={mockedListItems} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(listItems.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(listItems).toMatchSnapshot();
  });

  it('has the section tag.', () => {
    const sectionTag = listItems.baseElement.querySelector('section');
    expect(sectionTag).toBeDefined();
  });

  it('has all the list items.', () => {
    const innerListItems = listItems.getAllByTestId('listItemsItem');
    expect(innerListItems.length).toEqual(mockedListItems.length);
  });
});
