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
  grid-row: span 2;
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

const ViewAll = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 15px;
  background: ${getColor('clr-dark-200')};
  place-items: center;
  opacity: 0;
  transition: 0.3s;

  & > p {
    color: ${getColor('clr-light-300')};
  }
`;

const ScreenshotWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:hover ${ViewAll} {
    opacity: 1;
  }
`;

const ScreenshotBig = styled(ScreenshotWrapper)`
  margin-top: 5rem;
  grid-column: span 2;
`;

const VideoGrid = styled.section`
  display: grid;
  gap: 5rem;
  text-align: center;
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
  ViewAll,
  VideoGrid,
};
