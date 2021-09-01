import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAnimation, getColor } from '../../styles/utils';
import Portal from '../../hooks/Portal';
import Item from './Item';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  animation: ${getAnimation('openMobileMenu')} 1s;
`;

const Nav = styled.nav`
  position: absolute;
  right: 0;
  height: 100%;
  width: 300px;
  background: ${getColor('clr-dark-200')};
`;

const StyledList = styled.ul`
  display: grid;
  gap: 4em;
  text-align: right;
`;

const CloseButtonWrapper = styled.li`
  padding: 0.5em 0.5em 0;
  font-size: 4em;
`;

const MobileMenu = ({ onClick }) => (
  <Portal>
    <Wrapper>
      <Nav>
        <StyledList>
          <CloseButtonWrapper>
            <Button onClick={onClick}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </CloseButtonWrapper>

          <Item text="Home" href="/" />
          <Item text="Games" href="/games" />
          <Item text="Articles" href="/articles" />
          <Item text="Contact" href="/contact" />
          <Item text="Log in / Register" href="/sign" />
        </StyledList>
      </Nav>
    </Wrapper>
  </Portal>
);

MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MobileMenu;
