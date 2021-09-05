import styled from 'styled-components';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.section`
  display: flex;
  gap: 3rem;
  max-width: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;

  @supports not (aspect-ratio: 2/ 1) {
    min-height: 300px;
  }
`;

const SliderWrapper = styled.div`
  width: 20%;

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
    size: initial;
  }

  .slick-prev,
  .slick-next {
    transform: rotate(90deg);
  }
`;

const Gallery = ({ mainImage, galleryImages }) => {
  let settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
  };

  const renderImages = () =>
    galleryImages.map((image, index) => (
      <ImageWrapper key={index}>
        <Image src={image.url} layout="fill" alt={image.title} />
      </ImageWrapper>
    ));

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={mainImage.url}
          layout="fill"
          alt={mainImage.title}
        />
      </ImageWrapper>
      <SliderWrapper>
        <Slider {...settings}>{renderImages()}</Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

export default Gallery;
