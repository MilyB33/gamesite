import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { Card } from '../FlipCard/Common';
import { getColor } from '../../../styles/utils';
import ImageWrapper from '../../all/ImageWrapper';
import LinkBorder from '../../all/Link';

const StyledCard = styled(Card)`
  background: ${getColor('clr-dark-200')};
  padding: 0 0 2rem 0;
  border-radius: 15px;
  overflow: hidden;
  cursor: initial;
  transition: 0.3s;

  & > h4 {
    padding: 2rem 0;
    text-align: center;
    color: ${getColor('clr-light-100')};
    text-shadow: -2px -2px 0 ${getColor('clr-additional-300')};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImageWrapper = styled(ImageWrapper)`
  padding-top: 110%;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${getColor('clr-dark-200')};
  }
`;

const StyledLink = styled(LinkBorder)`
  margin-top: auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GameCard = ({ game }) => {
  const {
    cover: { url, alt },
    slug,
  } = game;

  return (
    <StyledCard>
      <StyledImageWrapper>
        <Image src={url} alt={alt} layout="fill" quality={100} />
      </StyledImageWrapper>

      <h4>{game.name}</h4>

      <StyledLink slug={slug}>More</StyledLink>
    </StyledCard>
  );
};

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default GameCard;
