import Button from '../Button/Button';
import styled from 'styled-components';
import {
  getColor,
  getMedias,
  getAnimation,
} from '../../styles/utils';

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 4em;
  background: ${getColor('clr-dark-200')};
  width: 100%;
  z-index: 5;
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

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
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

const ImageWrapper = styled.div`
  position: relative;
  width: clamp(50px, 8vw, 80px);
  padding-top: 100%;
`;

const MobileWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  animation: ${getAnimation('openMobileMenu')} 1s;
`;

const MobileNav = styled.nav`
  position: absolute;
  right: 0;
  height: 100%;
  width: 300px;
  background: ${getColor('clr-dark-200')};
`;

const MobileStyledList = styled.ul`
  display: grid;
  gap: 4em;
  text-align: right;
`;

const CloseButtonWrapper = styled.li`
  padding: 0.5em 0.5em 0;
  font-size: 4em;
`;

const Li = styled.li.attrs(({ router, href }) => ({
  active: router.pathname == href ? true : false,
}))`
  list-style: none;

  * h5 {
    color: ${({ active }) =>
      active
        ? getColor('clr-glitch-100')
        : getColor('clr-glitch-200')};

    position: relative;
    padding: 1rem 3rem;
    transition: 0.5s;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${({ active }) => (active ? '100%' : '0%')};
      height: 0.5rem;
      background: ${getColor('clr-glitch-100')};
      transition: 0.5s;
    }

    &:hover {
      color: ${getColor('clr-glitch-100')};

      &::after {
        width: 100%;
      }
    }
  }
`;

export {
  NavigationWrapper,
  StyledList,
  LogoWrapper,
  Hamburger,
  ImageWrapper,
  MobileWrapper,
  MobileNav,
  MobileStyledList,
  CloseButtonWrapper,
  Li,
};
