import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.name}>Сверстать сайт</span>
      <span className={styles.number}>Помидор 1</span>
    </div>
  );
}
