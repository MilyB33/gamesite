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
      <Link href={href}>
        <a>
          <h5>{text}</h5>
        </a>
      </Link>
    </Li>
  );
};

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

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Item;
