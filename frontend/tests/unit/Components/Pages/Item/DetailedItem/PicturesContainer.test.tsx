/**
 * Contains the unit tests for Buy pictures container.
 */
import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PicturesContainer } from '../../../../../../src/components/Pages/Item/DetailedItem/PicturesContainer';
import { mockedDetailedItem } from '../../../../__mocks__/detailedItem';

const allPictures = mockedDetailedItem.all_pictures;
const altText = mockedDetailedItem.description;

describe('PicturesContainer component', () => {
  let picturesContainer: RenderResult;

  beforeEach(() => {
    picturesContainer = render(<PicturesContainer altText={altText} pictures={allPictures} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders.', () => {
    expect(picturesContainer.baseElement).toBeInTheDocument();
  });

  it('matches snapshot.', () => {
    expect(picturesContainer).toMatchSnapshot();
  });

  it('has the picture tag.', () => {
    const imgTag = picturesContainer.baseElement.querySelector('picture');
    expect(imgTag).toBeDefined();
  });

  it('has all images.', () => {
    const pictures = picturesContainer.getAllByTestId('picturesContainerPicture');
    const LATERAL_BUTTONS_COUNT = 2;
    expect(pictures.length).toEqual(allPictures.length + LATERAL_BUTTONS_COUNT);
  });
});
