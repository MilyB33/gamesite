import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Item from './Item';
import styled, { withTheme } from 'styled-components';
import { getColor } from '../../styles/utils';

const CustomImage = React.forwardRef(function CustomImage(
  { onClick, href },
  ref
) {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        src="/static/logo.png"
        height={80}
        width={80}
        alt="logo"
      />
    </a>
  );
});

const Navigation = () => {
  return (
    <Nav>
      <StyledList>
        <LogoWrapper as="li">
          <Link href="/" passHref>
            <CustomImage />
          </Link>
        </LogoWrapper>

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
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem;
  background: ${getColor('clr-dark-200')};
  width: 100%;
  z-index: 99999;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const RegisterItem = styled(Item)`
  margin-left: auto;
`;

const LogoWrapper = styled(Item)`
  margin-right: 5rem;
`;

export default Navigation;
