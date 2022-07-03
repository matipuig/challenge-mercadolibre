/**
 * Contains the unit tests for Search text form.
 */
import { cleanup, fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CONSTANTS } from '../../../../../src/constants';
import { SearchTextForm } from '../../../../../src/components/Layout/Header/SearchTextForm';
import { getURLWithBase, mockNextUseRouter } from '../../../../utils';
import { getAvailableI18nTexts, t } from '../../../../../src/i18n';

const { ROUTES } = CONSTANTS;
const { QUERY_PARAMS } = ROUTES;
const texts = getAvailableI18nTexts();
const QUERY_PARAM_SEARCH_VALUE = 'aaa';

describe('Search text form component', () => {
  let searchTextForm: RenderResult;
  const routerPush = jest.fn((route: string | string[]) => route);
  mockNextUseRouter({
    query: { [QUERY_PARAMS.SEARCH]: QUERY_PARAM_SEARCH_VALUE },
    push: routerPush,
  });

  beforeEach(() => {
    searchTextForm = render(<SearchTextForm />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders.', () => {
    expect(searchTextForm.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(searchTextForm).toMatchSnapshot();
  });

  it('has logo.', () => {
    const logo = searchTextForm.getAllByRole('img');
    expect(logo).toBeDefined();
  });

  it('has the search text form component.', () => {
    const searchTextComponent = searchTextForm.getByTestId('searchTextForm');
    expect(searchTextComponent).toBeDefined();
  });

  it('has the search button.', () => {
    const logo = searchTextForm.getAllByRole('button', {
      name: t(texts.components.layout.header.searchTextForm.tooltip),
    });
    expect(logo).toBeDefined();
  });

  it('starts with the search query param value.', async () => {
    const originalValueComponent = searchTextForm.getByTestId('originalInputValueFromQuery');
    expect(originalValueComponent.getAttribute('value')).toEqual(QUERY_PARAM_SEARCH_VALUE);
  });

  it('executes submit with search param.', async () => {
    const placeHolder = t(texts.components.layout.header.searchTextForm.placeholder);
    const inputComponent = searchTextForm.getByPlaceholderText(placeHolder);
    const inputValue = Math.random().toString();
    fireEvent.change(inputComponent, { target: { value: inputValue } });
    const searchTextComponent = searchTextForm.getByTestId('searchTextForm');
    fireEvent.submit(searchTextComponent);
    await waitFor(() => routerPush.mock.calls.length >= 0);
    const lastLocation = routerPush.mock.results.pop()?.value;
    expect(lastLocation).toBeDefined();
    const entireUrl = getURLWithBase(lastLocation);
    const url = new URL(entireUrl);
    expect(url.searchParams.get(QUERY_PARAMS.SEARCH)).toEqual(inputValue);
  });
});
