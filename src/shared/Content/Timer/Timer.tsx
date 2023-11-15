import React from 'react';
import styles from './timer.css';
import { EIcon, Icons } from '../../Icon/Icon';

export function Timer() {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <span className={styles.name}>Сверстать сайт</span>
        <span className={styles.number}>Помидор 1</span>
      </div>
      <div className={styles.main}>
        <div className={styles.timer}>25:00 <span className={styles.plus}><Icons name={EIcon.plus}/></span></div>
        <div className={styles.task}>Задача 1 - <span className={styles.taskName}>Сверстать сайт</span></div>
        <div className={styles.buttons}><button className={styles.start}>Старт</button> <button className={styles.stop}>Стоп</button></div>
      </div> 
    </div>
  );
}
