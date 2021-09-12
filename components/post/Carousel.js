import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMedias } from '../../styles/utils';
import ImageWrapper from '../all/ImageWrapper';

const settings = {
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const SliderWrapper = styled.div`
  width: 20%;

  @media (max-width: ${getMedias('laptop')}) {
    width: 100%;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 0rem 5rem;
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
    padding: 0.5em 0;
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

const StyledImageWrapper = styled(ImageWrapper)`
  box-shadow: 0 -2px 0px 0px #fb8b24, 0 2px 0px 0px #fb8b24;
`;

const Carousel = ({ images }) => {
  const renderImages = () =>
    images.map((image, index) => (
      <StyledImageWrapper key={index} square>
        <Image src={image.url} layout="fill" alt={image.title} />
      </StyledImageWrapper>
    ));

  return (
    <SliderWrapper>
      <Slider {...settings}>{renderImages()}</Slider>
    </SliderWrapper>
  );
};

Carousel.defaultProps = {
  images: [],
};

Carousel.propTypes = {
  images: PropTypes.instanceOf(Array),
};

export default Carousel;
