import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import ImageWrapper from '../../all/ImageWrapper';
import { CardSide } from './Common';
import { getColor } from '../../../styles/utils';

const StyledImageWrapper = styled(ImageWrapper)`
  padding-top: 110%;
`;

const FlipFront = styled(CardSide)`
  background: ${getColor('clr-dark-200')};
  padding: 0 0 2rem 0;

  & > h4 {
    padding: 2rem 0;
    text-align: center;
    color: ${getColor('clr-light-100')};
    text-shadow: -2px -2px 0 ${getColor('clr-additional-300')};
  }
`;

const CardFront = ({ cover, name }) => {
  const { url, alt } = cover;

  return (
    <FlipFront>
      <StyledImageWrapper>
        <Image src={url} alt={alt} layout="fill" quality={100} />
      </StyledImageWrapper>

      <h4>{name}</h4>
    </FlipFront>
  );
};

CardFront.propTypes = {
  cover: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
};

export default CardFront;
