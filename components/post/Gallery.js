import styled from 'styled-components';
import Image from 'next/image';
import { getMedias } from '../../styles/utils';
import ImageWrapper from '../all/ImageWrapper';
import Carousel from './Carousel';

const Wrapper = styled.section`
  display: flex;
  gap: 5rem;
  max-width: 100%;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
  }
`;

const SliderWrapper = styled.div`
  width: 20%;

  @media (max-width: ${getMedias('laptop')}) {
    width: 100%;
  }

  .slick-slider {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .slick-slide > div {
    padding: 1em 0;
  }

  .slick-list {
    margin: -1rem 0;
  }

  .slick-arrow {
    position: initial;
  }

  .slick-prev,
  .slick-next {
    transform: rotate(90deg);
  }

  @media (max-width: ${getMedias('laptop')}) {
    .slick-slider {
      width: 100%;
      display: block;
    }

    .slick-arrow {
      position: absolute;
    }

    .slick-prev,
    .slick-next {
      transform: rotate(0deg);
    }

    .slick-slide > div {
      padding: 0em 0.5em;
    }

    .slick-list {
      margin: 0rem 0em;
    }
  }
`;

const Gallery = ({ mainImage, galleryImages }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={mainImage.url}
          layout="fill"
          alt={mainImage.title}
        />
      </ImageWrapper>
      <Carousel images={galleryImages} />
    </Wrapper>
  );
};

export default Gallery;
