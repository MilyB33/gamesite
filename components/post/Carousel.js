import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMedias } from '../../styles/utils';
import CarouselItem from './CarouselItem';
import Portal from '../../hoc/Portal';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

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
  @media (max-width: ${getMedias('laptop')}) {
    padding: 0rem 5%;
  }

  @media (max-width: 400px) {
    padding: 0rem 10%;
  }

  .slick-slide > div {
    padding: 0.5em 0;
  }

  .slick-track {
    max-height: 605px;
  }

  .slick-arrow {
    position: initial;
    margin: 1rem auto;
  }

  .slick-prev,
  .slick-next {
    transform: rotate(90deg);
  }

  @media (max-width: ${getMedias('laptop')}) {
    .slick-slider {
      width: 100%;
    }

    .slick-arrow {
      position: absolute;
      margin: 0;
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

const Carousel = ({ images }) => {
  const [isGallery, setIsGallery] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const openGallery = (image) => {
    setActivePhoto(image);
    setIsGallery(true);
  };

  const closeGallery = () => {
    setIsGallery(false);
    setActivePhoto(null);
  };

  const renderImages = () =>
    images.map((image, index) => (
      <CarouselItem
        image={image}
        key={index}
        openGallery={openGallery}
        setActive={setActivePhoto}
      />
    ));

  return (
    <>
      <Portal>
        {isGallery && (
          <PhotoGallery
            closeGallery={closeGallery}
            activePhoto={activePhoto}
            images={images}
          />
        )}
      </Portal>

      <SliderWrapper>
        <Slider {...settings}>{renderImages()}</Slider>
      </SliderWrapper>
    </>
  );
};

Carousel.defaultProps = {
  images: [],
};

Carousel.propTypes = {
  images: PropTypes.instanceOf(Array),
};

export default Carousel;
