import styled from 'styled-components';
import { getMixins, getColor } from '../../styles/utils';
import { createGlobalStyle } from 'styled-components';

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
  ${getMixins('absolute')};
  width: 100%;
  height: 100%;
  background: rgba(32, 34, 36, 0.8);
`;

const PhotoGallery = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Backdrop />
      </Wrapper>
    </>
  );
};

export default PhotoGallery;
