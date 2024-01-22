import React from 'react';
import styles from './tasks.css';
import { Task } from './Task/Task';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export function Tasks() {
  const tasks = useSelector<RootState, Array<string>>(state => state.task.tasks);

  if (tasks.length > 0) {
    return (
      <div className={styles.tasks}>
        {tasks.map((task, index) => (
          <Task index={index} task={task} />
        ))}
        <div className={styles.time}>{tasks.length * 25} мин</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}
