import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { Stats } from './Stats';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Stats />
    </header>
  );
}
