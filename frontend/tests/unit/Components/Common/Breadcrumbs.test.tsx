/**
 * Contains the unit tests for BreadCrumbs.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CONSTANTS } from '../../../../src/constants';
import { mockedCategories } from '../../__mocks__/categories';
import { Breadcrumbs } from '../../../../src/components/Pages/Common/Breadcrumbs';
import { getURLWithBase } from '../../../utils';

const { ROUTES } = CONSTANTS;
const { QUERY_PARAMS } = ROUTES;

describe('Common breadcrumbs component', () => {
  let breadcrumbs: RenderResult;

  beforeEach(() => {
    breadcrumbs = render(<Breadcrumbs categories={mockedCategories} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('has at least one testing category.', () => {
    expect(mockedCategories.length).toBeGreaterThan(0);
  });

  it('renders.', () => {
    expect(breadcrumbs.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(breadcrumbs).toMatchSnapshot();
  });

  it('has the nav tag.', () => {
    const navTag = breadcrumbs.getByRole('navigation');
    expect(navTag).toBeDefined();
  });

  it('has a link for each category.', () => {
    const links = breadcrumbs.getAllByTestId('breadcrumbLink');
    expect(links.length).toEqual(mockedCategories.length);
  });

  it('has the correct texts in links.', () => {
    const links = breadcrumbs.queryAllByTestId('breadcrumbLink');
    links.forEach((link, index) => {
      const expectedText = mockedCategories[index].name;
      expect(link.innerHTML).toEqual(expectedText);
    });
  });

  it('has the correct link.', () => {
    const links = breadcrumbs.queryAllByTestId('breadcrumbLink');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).toBeDefined();
      const entireUrl = getURLWithBase(href as string);
      const url = new URL(entireUrl);
      const urlParams = url.searchParams;
      expect(url.pathname).toEqual(ROUTES.ITEMS);
      expect(urlParams.get(QUERY_PARAMS.CATEGORY)).toBeDefined();
    });
  });
});
