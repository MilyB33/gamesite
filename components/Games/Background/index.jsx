import PropTypes from 'prop-types';
import Image from 'next/image';
import { Wrapper } from './Background.styles';

const Background = ({ background, alt }) => {
  return (
    <>
      <Wrapper>
        <Image src={background} layout="fill" alt={alt} />
      </Wrapper>
    </>
  );
};

Background.propTypes = {
  background: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Background;
