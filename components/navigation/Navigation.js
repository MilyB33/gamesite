import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Item from './Item';
import Button from '../Button/Button';
import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 4em;
  background: ${getColor('clr-dark-200')};
  width: 100%;
  z-index: 99999;
  transition: 0.5s;
  opacity: ${({ mobileVisibility }) =>
    mobileVisibility ? '0' : '1'};
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;

  @media (max-width: ${getMedias('laptop')}) {
    display: none;
  }
`;

const RegisterItem = styled(Item)`
  margin-left: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 5em 1em 0;
`;

const Hamburger = styled(Button)`
  display: none;
  margin-left: auto;
  font-size: 4em;

  @media (max-width: ${getMedias('laptop')}) {
    display: initial;
  }
`;

const Navigation = () => {
  const [isMobileDisplayed, setIsMobileDisplayed] = useState(false);

  const onMobileChange = () => {
    setIsMobileDisplayed(!isMobileDisplayed);
  };

  const mobile = isMobileDisplayed && (
    <MobileMenu onClick={onMobileChange} />
  );

  return (
    <Wrapper mobileVisibility={isMobileDisplayed}>
      {mobile}

      <LogoWrapper>
        <Link href="/">
          <a>
            <Image
              src="/static/logo.png"
              height={71}
              width={71}
              alt="logo"
            />
          </a>
        </Link>
      </LogoWrapper>

      <StyledList>
        <Item text="Home" href="/" />
        <Item text="Games" href="/games" />
        <Item text="Articles" href="/articles" />
        <Item text="Contact" href="/contact" />
        <RegisterItem
          text="Log in / Register"
          href="/sign"
          className="sign"
        />
      </StyledList>

      <Hamburger onClick={onMobileChange}>
        <FontAwesomeIcon icon={faBars} />
      </Hamburger>
    </Wrapper>
  );
};
export default Navigation;
