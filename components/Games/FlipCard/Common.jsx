import styled from 'styled-components';
import { getColor } from '../../../styles/utils';

const CardSide = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
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
  max-width: 307px;
  display: grid;
  gap: 1rem;
  width: 25%;
  background: transparent;
  cursor: pointer;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export { CardSide, FlipCardInner, Card };
