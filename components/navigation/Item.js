import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Item = ({ text, href, className }) => {
  return (
    <Li className={className}>
      <h3>
        <Link href={href}>{text}</Link>
      </h3>
    </Li>
  );
};

const Li = styled.li`
  * > a {
    padding: 1rem 2rem;
    -webkit-text-stroke: 1px ${getColor('clr-purple-100')};
    transition: 0.5s;

    &:hover {
      color: ${getColor('clr-purple-100')};
      -webkit-text-stroke: 1px ${getColor('clr-light-100')};
    }
  }
`;

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Item;
