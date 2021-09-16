import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Slider from './SliderGallery';

const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 6;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.9);
`;

const PhotoGallery = ({ closeGallery, activePhoto, images }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Slider initialSlide={activePhoto} images={images} />
        <Backdrop
          onClick={() => {
            closeGallery();
          }}
        />
      </Wrapper>
    </>
  );
};

PhotoGallery.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  closeGallery: PropTypes.func.isRequired,
  activePhoto: PropTypes.instanceOf(Object).isRequired,
};

export default PhotoGallery;
