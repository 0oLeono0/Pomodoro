import React from 'react';
import styles from './timer.css';
import { Icons, EIcon } from '../../../../Icon/Icon';

export function Timer() {
  return (
    <div className={styles.timer}>25:00 <span className={styles.plus}><Icons name={EIcon.plus} /></span></div>
  );
}
