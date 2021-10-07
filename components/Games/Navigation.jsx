import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CustomSearch from './CustomSearch';
import Item from '../navigation/Item';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background: transparent;
  padding: 1rem 2rem;
  z-index: 1;

  & > a {
    font-size: 5rem;
    cursor: pointer;
    padding: 1rem 1rem 1rem 0;
    transition: 0.5s;
    margin-right: auto;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link href="/games">
        <a>
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      </Link>

      <Item text="Log in / Register" href="/" />
    </Nav>
  );
};

export default Navigation;
