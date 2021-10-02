import styled from 'styled-components';
import { getColor } from '../../../styles/utils';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 20rem;
  gap: 3rem 10rem;
`;

const Header = styled.header`
  & > div {
    display: flex;
  }
`;

const HeaderInfoBox = styled.div`
  text-align: center;
  padding: 2rem 5rem;

  & + & {
    border-left: 0.3rem solid ${getColor('clr-additional-300')};
  }

  & > p {
    color: ${getColor('clr-dark-500')};
  }
`;

const Info = styled.section`
  display: grid;
  gap: 5rem;
`;

const About = styled.article`
  & > p {
    margin-top: 5rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  & > * {
    width: 100%;
  }
`;

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row: span 2;
  grid-column: 2;
  gap: 2rem;
  padding: 5rem;
`;

const ScreenshotWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 15px;
  overflow: hidden;
`;

const ScreenshotBig = styled(ScreenshotWrapper)`
  margin-top: 5rem;
  grid-column: span 2;
`;

export {
  Grid,
  Header,
  HeaderInfoBox,
  Info,
  About,
  InfoBox,
  ScreenshotsGrid,
  ScreenshotWrapper,
  ScreenshotBig,
};
