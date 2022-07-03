/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult, screen } from '@testing-library/react';
import { NoResults } from '../../../../src/components/Pages/Items/NoResults';
import { t, getAvailableI18nTexts } from '../../../../src/i18n';
import '@testing-library/jest-dom/extend-expect';

const texts = getAvailableI18nTexts();

describe('Not results component', () => {
  let noResults: RenderResult;

  beforeEach(() => {
    noResults = render(<NoResults />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(noResults.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(noResults).toMatchSnapshot();
  });

  it('has the section tag.', () => {
    const sectionTag = noResults.container.querySelector('section');
    expect(sectionTag).toBeInTheDocument();
  });

  it('has a header with the expected content.', () => {
    const name = t(texts.components.listItems.noResults.mainText);
    const h3 = noResults.getByRole('heading', { level: 3, name });
    expect(h3).toBeInTheDocument();
  });

  it('has advice displayed correctly.', () => {
    const advice = t(texts.components.listItems.noResults.textAdvice);
    expect(screen.getByText(advice)).toBeInTheDocument;
  });
});
