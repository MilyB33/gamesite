import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import headerSub from '../../assets/headerSub.png';
import { getColor, getMedias } from '../../styles/utils';
import Link from 'next/dist/client/link';

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;

  @media (max-width: ${getMedias('laptop')}) {
    padding-top: 7rem;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding-top: 10em;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.53) 0%,
      rgba(0, 0, 0, 0.6) 90%,
      rgba(0, 0, 0, 0.8) 99.83%
    );
  }
`;

const HeaderText = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 3em 0;
  text-align: center;
  word-spacing: 1em;

  & > h2 {
    text-shadow: 3px 3px 16px ${getColor('clr-glitch-200')};
    margin-bottom: auto;
  }

  & *:is(h5, a) {
    text-shadow: 3px 3px 16px ${getColor('clr-glitch-200')};
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <ImageWrapper>
        <Image src={headerSub} alt="header" />
      </ImageWrapper>

      <HeaderText>
        <h2>{title}</h2>
        <span>
          <Link href="/">
            <a>
              <h5>Home </h5>
            </a>
          </Link>

          <h5>&gt;&gt;</h5>
          <h5>{title}</h5>
        </span>
      </HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
