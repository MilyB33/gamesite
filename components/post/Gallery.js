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
    gap: 1rem;
  }
`;

const StyledImageWrapper = styled(ImageWrapper)`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Gallery = ({ mainImage, galleryImages }) => {
  return (
    <Wrapper>
      <StyledImageWrapper>
        <Image
          src={mainImage.url}
          layout="fill"
          alt={mainImage.title}
        />
      </StyledImageWrapper>
      <Carousel images={galleryImages} />
    </Wrapper>
  );
};

export default Gallery;
