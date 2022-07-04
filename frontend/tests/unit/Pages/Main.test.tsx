/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';

import Main from '../../../src/pages/index';
import '@testing-library/jest-dom/extend-expect';

describe('Main', () => {
  let main: RenderResult;

  beforeEach(() => {
    main = render(<Main />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(main.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(main).toMatchSnapshot();
  });
});
