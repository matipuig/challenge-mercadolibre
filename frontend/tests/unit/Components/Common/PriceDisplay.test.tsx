/**
 * Contains the unit tests for PriceDisplay.
 */
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { mockedPrices } from '../../__mocks__/prices';
import { PriceDisplay } from '../../../../src/components/Pages/Common/PriceDisplay';

describe('Common price display component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    const priceDisplay = render(<PriceDisplay price={mockedPrices[0]} />);
    expect(priceDisplay.baseElement).toBeInTheDocument();
  });

  it('with pesos matches snapshot.', () => {
    const priceDisplay = render(<PriceDisplay price={mockedPrices[0]} />);
    expect(priceDisplay).toMatchSnapshot();
  });

  it('with other currency matches snapshot.', () => {
    const priceDisplay = render(<PriceDisplay price={mockedPrices[1]} />);
    expect(priceDisplay).toMatchSnapshot();
  });
});
