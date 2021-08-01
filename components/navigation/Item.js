import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Item = ({ text, style, href }) => {
  return (
    <li className={style}>
      <h3>
        <Link href={href}>{text}</Link>
      </h3>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Item;
