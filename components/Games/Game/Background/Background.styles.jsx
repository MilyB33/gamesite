import styled from 'styled-components';

const Grid = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 56.25vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    padding-top: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.53) 0%,
      rgba(38, 38, 38, 0.96) 30%,
      rgba(38, 38, 38, 1) 80.83%
    );
  }
`;

export { Grid, Wrapper };
