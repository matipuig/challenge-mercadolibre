/**
 * Contains the unit tests for the Main.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Main } from '../../../../src/components/Layout/Main';

describe('Layout main', () => {
  let main: RenderResult;

  beforeEach(() => {
    main = render(
      <Main>
        <div />
      </Main>,
    );
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

  it('contains main tag.', () => {
    const mainTag = main.baseElement.querySelector('main');
    expect(mainTag).toBeDefined();
  });
});
