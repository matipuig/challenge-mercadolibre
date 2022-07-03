/**
 * Contains the unit tests for the header.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../../../../../src/components/Layout/Header';
import { mockNextUseRouter } from '../../../../utils';

describe('Layout header', () => {
  let header: RenderResult;
  mockNextUseRouter({ query: {} });

  beforeEach(() => {
    header = render(<Header />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(header.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(header).toMatchSnapshot();
  });

  it('has the main logo.', () => {
    const logo = header.getByTestId('logo');
    expect(logo).toBeDefined();
  });

  it('has the link for the main page', () => {
    const link = header.getByRole('link');
    expect(link.getAttribute('href')).toEqual('/');
  });
});
