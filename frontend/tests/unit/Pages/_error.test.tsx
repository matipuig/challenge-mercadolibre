/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';

import Error from '../../../src/pages/_error';
import '@testing-library/jest-dom/extend-expect';

describe('Error', () => {
  let error: RenderResult;

  beforeEach(() => {
    error = render(<Error />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(error.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(error).toMatchSnapshot();
  });

  it('has not error page content component.', () => {
    const errorPageContentComponent = error.getByTestId('errorPageContentComponent');
    expect(errorPageContentComponent).toBeDefined();
  });
});
