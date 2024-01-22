import React from 'react';
import styles from './main.css';
import { Timer } from './Timer';
import { Task } from './Task';
import { Buttons } from './Buttons';

export function Main() {
  return (
    <div className={styles.main}>
      <Timer/>
      <Task/>
      <Buttons/>
    </div>
  );
}
