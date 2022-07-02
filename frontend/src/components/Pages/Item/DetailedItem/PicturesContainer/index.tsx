/**
 * Contains the pictures of a detailed item.
 */
import { ReactElement } from 'react';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ItemPicture } from '~/types/services/backend';

import styles from './index.module.scss';

interface PicturesContainerProps {
  pictures: ItemPicture[];
  altText: string;
}

export const PicturesContainer = ({ pictures, altText }: PicturesContainerProps): ReactElement => (
  <picture className={styles.container}>
    <Carousel
      autoPlay
      aria-hidden
      dynamicHeight={false}
      emulateTouch
      infiniteLoop
      interval={3000}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable
    >
      {pictures.map((picture) => (
        <div key={picture.url} className={styles.imageContainer}>
          <Image
            aria-hidden
            alt={altText}
            className={styles.image}
            height={picture.height}
            quality={100}
            src={picture.url}
            title={altText}
            width={picture.width}
          />
        </div>
      ))}
    </Carousel>
  </picture>
);

export default PicturesContainer;
