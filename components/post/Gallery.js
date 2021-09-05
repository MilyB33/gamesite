import styled from 'styled-components';
import Image from 'next/image';
import { getMedias } from '../../styles/utils';
import ImageWrapper from '../all/ImageWrapper';
import Carousel from './Carousel';

const Wrapper = styled.section`
  display: flex;
  gap: 5rem;
  max-width: 100%;
  max-height: 550px;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
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
