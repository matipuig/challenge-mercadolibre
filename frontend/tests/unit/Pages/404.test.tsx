/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';

import Error404 from '../../../src/pages/404';
import '@testing-library/jest-dom/extend-expect';

describe('Error404', () => {
  let error404: RenderResult;

  beforeEach(() => {
    error404 = render(<Error404 />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(error404.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(error404).toMatchSnapshot();
  });

  it('has not found component.', () => {
    const notFoundComponent = error404.getByTestId('notFoundComponent');
    expect(notFoundComponent).toBeDefined();
  });
});
