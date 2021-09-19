import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import ImageWrapper from '../all/ImageWrapper';
import { getColor } from '../../styles/utils';

const StyledImageWrapper = styled(ImageWrapper)`
  padding-top: 110%;
`;

const FlipFront = styled.div`
  border-radius: 50px;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${getColor('clr-dark-200')};
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  & > h4 {
    text-align: center;
    color: ${getColor('clr-light-100')};
    text-shadow: -2px -2px 0 ${getColor('clr-additional-300')};
    padding: 2rem 0;
  }
`;

const FlipBack = styled.div`
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  background: ${getColor('clr-dark-300')};
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const FlipCardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Card = styled.article`
  position: relative;
  min-height: 450px;
  display: grid;
  gap: 1rem;
  width: 25%;
  background: transparent;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const GameCard = ({ game }) => {
  console.log(game);

  return (
    <Card>
      <FlipCardInner>
        <FlipFront>
          <StyledImageWrapper>
            <Image
              src={game.cover.url}
              alt={game.cover.alt}
              layout="fill"
              quality={100}
            />
          </StyledImageWrapper>

          <h4>{game.name}</h4>
        </FlipFront>

        <FlipBack></FlipBack>
      </FlipCardInner>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default GameCard;
