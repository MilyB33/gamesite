import Link from 'next/link';
import Image from 'next/image';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';
import useMobile from '../../hooks/useMobile';
import {
  NavigationWrapper,
  StyledList,
  LogoWrapper,
  Hamburger,
  ImageWrapper,
} from './Navigation.styles';

const Navigation = () => {
  const { isMobileDisplayed, closeMobileMenu, openMobileMenu } =
    useMobile('1024', false);

  const mobile = isMobileDisplayed && (
    <MobileMenu onClick={closeMobileMenu} />
  );

  return (
    <NavigationWrapper mobileVisibility={isMobileDisplayed}>
      {mobile}

      <LogoWrapper>
        <Link href="/">
          <a>
            <ImageWrapper>
              <Image
                src="/static/logo.png"
                layout="fill"
                alt="logo"
              />
            </ImageWrapper>
          </a>
        </Link>
      </LogoWrapper>

      <StyledList>
        <Item text="Home" href="/" />
        <Item text="Games" href="/games" />
        <Item text="Articles" href="/articles" />
        <Item text="Contact" href="/contact" />
      </StyledList>

      <Hamburger onClick={openMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </Hamburger>
    </NavigationWrapper>
  );
};
export default Navigation;
