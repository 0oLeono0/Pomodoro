import React from 'react';
import styles from './timer.css';
import { Header } from './Header';
import { Main } from './Main';

export function Timer() {
  return (
    <div className={styles.block}>
      <Header/>
      <Main/>
    </div>
  );
}
