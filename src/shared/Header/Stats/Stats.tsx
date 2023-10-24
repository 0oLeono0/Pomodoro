import React from 'react';
import styles from './stats.css';
import { Icons, EIcon } from '../../Icon/Icon';

export function Stats() {
  return (
    <a href="#" className={styles.statsLink}>
      <Icons name={EIcon.stats} />
      Статистика
    </a>
  );
}
