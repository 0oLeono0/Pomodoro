import React from 'react';
import styles from './logo.css';
import { EIcon, Icons } from '../../Icon/Icon';

export function Logo() {
  return (
    <a href="#" className={styles.logoLink}>
      <Icons name={EIcon.logo} />
      pomodoro_box
    </a>
  );
}
