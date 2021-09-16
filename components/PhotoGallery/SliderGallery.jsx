import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { getMedias, getMixins } from '../../styles/utils';
import CarouselItem from './CarouselItem';
import ImageWrapper from '../all/ImageWrapper';
import Image from 'next/image';
import CustomArrow from './CustomArrow';

const SliderWrapper = styled.div`
  ${getMixins('absoluteCenter')};
  width: 70%;

  @media (max-width: ${getMedias('tablet')}) {
    width: 95%;
  }

  .slick-thumb,
  .slick-dots {
    position: relative;
    justify-content: center;
  }

  .slick-thumb li {
    width: 8vw;
    height: 100%;
    margin-bottom: 1rem;

    @media (max-width: ${getMedias('tablet')}) {
      width: 20%;
    }
  }

  .slick-active div {
    filter: grayscale(0);
  }
`;

const StyledWrapper = styled(ImageWrapper)`
  width: 100%;
  filter: grayscale(80%);
`;

const SliderGallery = ({ images, initialSlide }) => {
  const CustomPaging = (i) => (
    <a>
      <StyledWrapper square>
        <Image
          src={images[i].url}
          layout="fill"
          alt={images[i].title}
        />
      </StyledWrapper>
    </a>
  );

  const settings = {
    customPaging: CustomPaging,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: images.findIndex(
      (image) => image.url === initialSlide.url
    ),
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  const renderImages = () =>
    images.map((image, index) => (
      <CarouselItem image={image} key={index} />
    ));

  return (
    <>
      <SliderWrapper>
        <Slider {...settings}>{renderImages()}</Slider>
      </SliderWrapper>
    </>
  );
};

SliderGallery.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  initialSlide: PropTypes.instanceOf(Object).isRequired,
};

export default SliderGallery;
