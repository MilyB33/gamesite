import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import { useRouter } from 'next/router';

const Item = ({ text, href, className }) => {
  const router = useRouter();

  return (
    <Li className={className} router={router} href={href}>
      <h3>
        <Link href={href}>{text}</Link>
      </h3>
    </Li>
  );
};

const Li = styled.li.attrs(({ router, href }) => ({
  color: router.pathname == href ? 'clr-dark-100' : 'clr-light-100',
  width: router.pathname == href ? '100%' : '0%',
}))`
  * > a {
    color: ${({ color }) => getColor(color)};

    position: relative;
    padding: 1rem 3rem;
    -webkit-text-stroke: 1px ${getColor('clr-purple-100')};
    transition: 0.5s;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${({ width }) => width};
      height: 0.5rem;
      background: ${getColor('clr-purple-200')};
      transition: 0.5s;
    }

    &:hover {
      color: ${getColor('clr-dark-100')};

      &::after {
        width: 100%;
      }
    }
  }
`;

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Item;
