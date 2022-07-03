/**
 * Contains the unit tests for not found content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import { NotFound } from '../../../../src/components/Pages/NotFound';
import { t, getAvailableI18nTexts } from '../../../../src/i18n';
import '@testing-library/jest-dom/extend-expect';

const texts = getAvailableI18nTexts();

describe('Not found component', () => {
  let notFound: RenderResult;

  beforeEach(() => {
    notFound = render(<NotFound />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(notFound.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(notFound).toMatchSnapshot();
  });

  it('has the section tag.', () => {
    const sectionTag = notFound.container.querySelector('section');
    expect(sectionTag).toBeInTheDocument();
  });

  it('has a header with the expected content.', () => {
    const name = t(texts.components.notFound.mainText);
    const h3 = notFound.getByRole('heading', { level: 3, name });
    expect(h3).toBeInTheDocument();
  });

  it('has the link to the main page correctly.', () => {
    const name = t(texts.components.notFound.linkToMainManu);
    const link = notFound.getByRole('link', { name });
    expect(link).toBeInTheDocument();
  });
});
