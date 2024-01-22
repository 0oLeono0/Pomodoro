import React from 'react';
import styles from './task.css';
import { Icons, EIcon } from '../../../../Icon/Icon';

interface ITaskProps {
  index: number,
  task: string,
}

export function Task(props: ITaskProps) {
  return (
    <div className={styles.task}>
      <span className={styles.number}>{props.index}</span>
      <p className={styles.text}>{props.task}</p>
      <button className={styles.menuButton}>
        <Icons name={EIcon.menu} />
      </button>
    </div>
  );
}
