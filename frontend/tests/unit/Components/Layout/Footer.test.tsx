/**
 * Contains the unit tests for the footer.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Footer } from '../../../../src/components/Layout/Footer';

describe('Layout footer', () => {
  let footer: RenderResult;

  beforeEach(() => {
    footer = render(<Footer />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(footer.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(footer).toMatchSnapshot();
  });
});
