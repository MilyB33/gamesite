import PropTypes from 'prop-types';
import Portal from '../../hooks/Portal';
import Item from './Item';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  MobileWrapper,
  MobileNav,
  MobileStyledList,
  CloseButtonWrapper,
} from './Navigation.styles';

const MobileMenu = ({ onClick }) => (
  <Portal>
    <MobileWrapper>
      <MobileNav>
        <MobileStyledList>
          <CloseButtonWrapper>
            <Button onClick={onClick}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </CloseButtonWrapper>

          <Item text="Home" href="/" />
          <Item text="Games" href="/games" />
          <Item text="Articles" href="/articles" />
          <Item text="Contact" href="/contact" />
        </MobileStyledList>
      </MobileNav>
    </MobileWrapper>
  </Portal>
);

MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MobileMenu;
