/**
 * Contains the unit tests for the Detailed item.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DetailedItem } from '../../../../../../src/components/Pages/Item/DetailedItem';
import { mockedDetailedItem } from '../../../../__mocks__/detailedItem';

describe('Detailed item component', () => {
  let detailedItem: RenderResult;

  beforeEach(() => {
    detailedItem = render(<DetailedItem detailedItem={mockedDetailedItem} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(detailedItem.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(detailedItem).toMatchSnapshot();
  });

  it('has the article tag.', () => {
    const articleTag = detailedItem.baseElement.querySelector('article');
    expect(articleTag).toBeDefined();
  });

  it('displays the title.', () => {
    const title = detailedItem.getByText(mockedDetailedItem.title);
    expect(title).toBeDefined();
  });

  it('displays the description.', () => {
    const description = detailedItem.getByTestId('detailedItemDescription');
    expect(description).toBeDefined();
    expect(description.innerHTML).toEqual(mockedDetailedItem.description);
  });

  it('displays the pictures container.', () => {
    const picturesContainer = detailedItem.getByTestId('picturesContainer');
    expect(picturesContainer).toBeDefined();
  });

  it('displays the price.', () => {
    const priceDisplay = detailedItem.getByTestId('priceDisplay');
    expect(priceDisplay).toBeDefined();
  });

  it('displays the buy button.', () => {
    const buyButton = detailedItem.getByTestId('buyButton');
    expect(buyButton).toBeDefined();
  });
});
