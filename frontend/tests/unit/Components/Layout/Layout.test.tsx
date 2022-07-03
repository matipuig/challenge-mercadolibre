/**
 * Contains the unit tests for the Main.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Layout } from '../../../../src/components/Layout';
import { mockNextUseRouter } from '../../../utils';

describe('Layout layout', () => {
  let layout: RenderResult;
  mockNextUseRouter({
    query: {},
  });

  beforeEach(() => {
    layout = render(<Layout />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(layout.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(layout).toMatchSnapshot();
  });

  it('renders header.', () => {
    const part = layout.getByTestId('header');
    expect(part).toBeDefined();
  });

  it('renders main.', () => {
    const part = layout.getByTestId('main');
    expect(part).toBeDefined();
  });

  it('renders footer.', () => {
    const part = layout.getByTestId('footer');
    expect(part).toBeDefined();
  });
});
