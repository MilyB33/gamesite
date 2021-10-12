import React from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import headerSub from '../../assets/headerSub.png';
import { getColor, getMedias } from '../../styles/utils';
import Link from 'next/dist/client/link';

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  background: ${getColor('clr-dark-100')};
  box-shadow: 0 2px 32px ${getColor('clr-dark-100')};

  @media (max-width: ${getMedias('laptop')}) {
    padding-top: 7rem;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding-top: 10em;
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
    -webkit-text-stroke: 3px ${getColor('clr-purple-100')};
    margin-bottom: auto;
  }

  & :is(h5, a) {
    -webkit-text-stroke: 1px ${getColor('clr-purple-100')};
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
      <Image src={headerSub} alt="header" />
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
