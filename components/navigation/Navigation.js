import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Item from './Item';
import styled, { withTheme } from 'styled-components';

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
        <Link href="/" passHref>
          <CustomImage />
        </Link>

        <StyledItem text="Home" href="/" />
        <StyledItem text="Games" href="/games" />
        <StyledItem text="Articles" href="/articles" />
        <StyledItem text="Contact" href="/contact" />
        <RegisterItem text="Log in / Register" href="/sign" />
      </StyledList>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  background: ${(props) => {
    console.log(props);
    return props.theme.color;
  }};
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledItem = styled(Item)`
  * > a {
    padding: 1rem 2rem;
    -webkit-text-stroke: 1px;
    transition: 0.5s;

    &:hover {
      color: hsl(292, 70%, 55%);
      -webkit-text-stroke: 1px hsl(0, 0%, 100%);
    }
  }
`;

const RegisterItem = styled(StyledItem)`
  margin-left: auto;
`;

const LogoWrapper = styled(StyledItem)`
  margin-right: 5rem;
`;

export default Navigation;
