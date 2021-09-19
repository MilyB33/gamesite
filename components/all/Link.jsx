import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { getColor } from '../../styles/utils';

const StyledLink = styled.div`
  position: relative;
  margin: auto auto 0;
  height: min-content;
  width: min-content;
  padding: 0.5rem 2.5rem;
  border: 4px solid ${getColor('clr-glitch-200')};
  transition: 0.5s;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 4px;
    background: ${getColor('clr-dark-300')};
    transition: 0.3s;
  }

  &::after {
    left: 75%;
    bottom: 100%;
  }

  &::before {
    left: 25%;
    top: 100%;
  }

  &:hover {
    border: 4px solid ${getColor('clr-glitch-100')};

    &::after {
      left: 25%;
    }

    &::before {
      left: 75%;
    }
  }
`;

const LinkBorder = ({ children, slug, className }) => (
  <Link href={`/games/${slug}`}>
    <a>
      <StyledLink className={className}>{children}</StyledLink>
    </a>
  </Link>
);

LinkBorder.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
};

export default LinkBorder;
