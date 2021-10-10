import styled from 'styled-components';
import { getColor, getMedias } from '../../../styles/utils';
import LinkBorder from '../../Generic/Link';

const Card = styled.article`
  --imageColumnWidth: 20%;
  --titleColumnWidth: 30%;
  --buttonColumnWidth: 1fr;

  display: grid;
  grid-template-columns:
    var(--imageColumnWidth) var(--titleColumnWidth)
    var(--buttonColumnWidth);
  align-items: center;
  gap: 5rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem 0 0;
  background: ${getColor('clr-dark-200')};
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 15px;

  & > h4 {
    padding: 2rem 0;
    color: ${getColor('clr-light-100')};
    text-shadow: -2px -2px 0 ${getColor('clr-additional-300')};
  }

  @media (max-width: ${getMedias('tablet')}) {
    gap: 0rem;
    --imageColumnWidth: 30%;
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  padding-top: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledLink = styled(LinkBorder)`
  margin-left: auto;

  @media (max-width: ${getMedias('mobile')}) {
    & > a {
      padding-inline: 1.5rem;
    }
  }
`;

export { Card, ImageWrapper, StyledLink };
