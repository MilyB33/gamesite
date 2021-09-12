import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ square }) => (square ? '75%' : '50%')};
`;

const ImageWrapper = ({ children, className, square }) => {
  return (
    <Wrapper className={className} square={square}>
      {children}
    </Wrapper>
  );
};

ImageWrapper.defaultProps = {
  children: null,
  className: null,
  square: false,
};

ImageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  square: PropTypes.bool,
};

export default ImageWrapper;
