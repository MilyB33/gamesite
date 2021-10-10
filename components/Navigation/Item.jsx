import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Li } from './Navigation.styles';

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

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Item;
