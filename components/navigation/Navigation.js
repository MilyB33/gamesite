import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/components/Navigation.module.scss';
import Item from './Item';

const CustomImage = React.forwardRef(function CustomImage(
  { onClick, href },
  ref
) {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        src="/static/logo.png"
        height={80}
        width={80}
        alt="logo"
      />
    </a>
  );
});

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.logo}`}>
          <Link href="/" passHref>
            <CustomImage />
          </Link>
        </li>

        <Item text="Home" style={styles.item} href="/" />
        <Item text="Games" style={styles.item} href="/games" />
        <Item text="Articles" style={styles.item} href="/articles" />
        <Item text="Contact" style={styles.item} href="/contact" />
        <Item
          text="Log in / Register"
          style={`${styles.item} ${styles.sign}`}
          href="/sign"
        />
      </ul>
    </nav>
  );
};

export default Navigation;
