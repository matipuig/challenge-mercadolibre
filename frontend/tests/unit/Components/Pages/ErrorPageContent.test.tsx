/**
 * Contains the unit tests for Error page content.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ErrorPageContent } from '../../../../src/components/Pages/Error/ErrorPageContent';
import { t, getAvailableI18nTexts } from '../../../../src/i18n';
import '@testing-library/jest-dom/extend-expect';

const texts = getAvailableI18nTexts();

describe('Error page content component', () => {
  let errorPageContent: RenderResult;

  beforeEach(() => {
    errorPageContent = render(<ErrorPageContent />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(errorPageContent.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(errorPageContent).toMatchSnapshot();
  });

  it('has the section tag.', () => {
    const sectionTag = errorPageContent.container.querySelector('section');
    expect(sectionTag).toBeInTheDocument();
  });

  it('has a header with the expectedContent.', () => {
    const name = t(texts.components.erroredPageContent.mainText);
    const h3 = errorPageContent.getByRole('heading', { level: 3, name });
    expect(h3).toBeInTheDocument();
  });

  it('has the link to the main page correctly.', () => {
    const name = t(texts.components.erroredPageContent.linkToMainManu);
    const link = errorPageContent.getByRole('link', { name });
    expect(link).toBeInTheDocument();
  });
});
