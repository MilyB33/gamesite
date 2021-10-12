import PropTypes from 'prop-types';
import Image from 'next/image';
import { Wrapper, Grid } from './Background.styles';

const Background = ({ background, alt }) => {
  return (
    <Grid>
      <Wrapper>
        <Image src={background} layout="fill" alt={alt} />
      </Wrapper>
    </Grid>
  );
};

Background.propTypes = {
  background: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Background;
