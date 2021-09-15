import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { getMixins } from '../../styles/utils';

const SliderWrapper = styled.div`
  ${getMixins('absoluteCenter')};
  width: 80%;
  height: 70%;
  background: red;
`;

const SliderGallery = ({ images, initialSlide }) => {
  return (
    <>
      <SliderWrapper>
        {/* <Slider {...settings}>{renderImages()}</Slider> */}
      </SliderWrapper>
    </>
  );
};

SliderGallery.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  initialSlide: PropTypes.instanceOf(Object).isRequired,
};

export default SliderGallery;
