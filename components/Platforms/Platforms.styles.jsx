import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

const PlatformCard = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  transition: 0.3s;
  cursor: pointer;

  & * {
    text-align: center;
    color: ${getColor('clr-additional-100')};
  }

  & a {
    width: 100%;
    padding: 2em;

    @media (max-width: ${getMedias('tablet')}) {
      padding: 2em 1.5em;
    }

    @media (max-width: ${getMedias('mobile')}) {
      margin: 0 4em;
    }
  }

  background: ${getColor('clr-dark-300')};
  gap: 2em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${getMedias('tablet')}) {
    width: 45%;
    gap: 0;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
  }
`;

const PlatformsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const PlatformsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-top: 5em;
  padding: 0 5rem;

  @media (max-width: ${getMedias('tablet')}) {
    gap: 2em;
  }
`;

export { PlatformCard, PlatformsSection, PlatformsWrapper };
