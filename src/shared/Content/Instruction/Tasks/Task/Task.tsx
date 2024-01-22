import React from 'react';
import styles from './task.css';
import { Menu } from './Menu';

interface ITaskProps {
  index: number,
  task: string,
}

export function Task(props: ITaskProps) {
  return (
    <div className={styles.task}>
      <span className={styles.number}>{props.index}</span>
      <p className={styles.text}>{props.task}</p>
      <Menu/>
    </div>
  );
}
