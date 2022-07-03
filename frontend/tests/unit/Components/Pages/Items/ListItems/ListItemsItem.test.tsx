/**
 * Contains the unit tests for the list items item.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CONSTANTS } from '../../../../../../src/constants';
import { ListItemsItem } from '../../../../../../src/components/Pages/Items/ListItems/ListItemsItem';
import { mockedListItems } from '../../../../__mocks__/listItems';
import { mockNextUseRouter } from '../../../../../utils';

const { ROUTES } = CONSTANTS;
const [mockedListItem] = mockedListItems;
const mockedListItemDetailView = ROUTES.ITEM.replace(':id', mockedListItem.id);

describe('List items item component', () => {
  let listItemsItem: RenderResult;
  const routerPrefetch = jest.fn((route: string | string[]) => route);
  mockNextUseRouter({ prefetch: routerPrefetch });

  beforeEach(() => {
    listItemsItem = render(<ListItemsItem item={mockedListItem} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders.', () => {
    expect(listItemsItem.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(listItemsItem).toMatchSnapshot();
  });

  it('has the article tag.', () => {
    const articleTag = listItemsItem.baseElement.querySelector('article');
    expect(articleTag).toBeDefined();
  });

  it('has the figure tag.', () => {
    const figureTag = listItemsItem.baseElement.querySelector('figure');
    expect(figureTag).toBeDefined();
  });

  it('has the title.', () => {
    const title = listItemsItem.getByText(mockedListItem.title);
    expect(title).toBeDefined();
  });

  it('has the image.', () => {
    const imageComponent = listItemsItem.getByTestId('listItemsItemImage');
    expect(imageComponent).toBeDefined();
  });

  it('has the price display.', () => {
    const priceDisplay = listItemsItem.getByTestId('priceDisplay');
    expect(priceDisplay).toBeDefined();
  });

  it('has the links to the detailed item.', () => {
    const links = listItemsItem.getAllByRole('link');
    const hrefs = links.map((e) => e.getAttribute('href'));
    expect(hrefs.length).toEqual(2);
    const firstHref = hrefs[0] as string;
    const [path] = firstHref.split('?');
    expect(path).toEqual(mockedListItemDetailView);
  });
});
