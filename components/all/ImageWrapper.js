import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;

  @supports not (aspect-ratio: 2 / 1) {
    min-height: 300px;
  }
`;

const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ImageWrapper.defaultProps = {
  children: null,
};

ImageWrapper.propTypes = {
  children: PropTypes.node,
};

export default ImageWrapper;
