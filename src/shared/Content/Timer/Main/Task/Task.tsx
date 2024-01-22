import React from 'react';
import styles from './task.css';

export function Task() {
  return (
    <div className={styles.task}>Задача 1 - <span className={styles.taskName}>Сверстать сайт</span></div>
  );
}
