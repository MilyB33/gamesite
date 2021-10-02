import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.53) 0%,
      rgba(38, 38, 38, 0.96) 70%,
      rgba(38, 38, 38, 0.99) 76.83%
    );
  }
`;

export { Wrapper };
