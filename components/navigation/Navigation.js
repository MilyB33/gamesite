import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/components/Navigation.module.scss';
import Item from './Item';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.logo}`}>
          <Link href="/">
            <Image src="/static/logo.png" height={80} width={80} />
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
