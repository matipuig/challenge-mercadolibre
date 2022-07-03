/**
 * Contains the unit tests for Buy Button component.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BuyButton } from '../../../../../../src/components/Pages/Item/DetailedItem/BuyButton';
import { mockedDetailedItem } from '../../../../__mocks__/detailedItem';

describe('Buy button component', () => {
  let buyButton: RenderResult;

  beforeEach(() => {
    buyButton = render(<BuyButton detailedItem={mockedDetailedItem} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders.', () => {
    expect(buyButton.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(buyButton).toMatchSnapshot();
  });
});
