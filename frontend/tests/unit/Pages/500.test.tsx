/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';

import Error500 from '../../../src/pages/500';
import '@testing-library/jest-dom/extend-expect';

describe('Error500', () => {
  let error500: RenderResult;

  beforeEach(() => {
    error500 = render(<Error500 />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(error500.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(error500).toMatchSnapshot();
  });

  it('has not error page content component.', () => {
    const errorPageContentComponent = error500.getByTestId('errorPageContentComponent');
    expect(errorPageContentComponent).toBeDefined();
  });
});
