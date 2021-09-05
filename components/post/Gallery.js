import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.section`
  display: flex;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;

  @supports not (aspect-ratio: 2/ 1) {
    min-height: 300px;
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
    </Wrapper>
  );
};

export default Gallery;
