import React, { ChangeEvent } from 'react';
import styles from './input.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { updateTask } from '../../../../store/task/actions';
import { ButtonGoodContainer } from '../ButtonGoodContainer';

export function Input() {
  const value = useSelector<RootState, string>(state => state.task.taskText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateTask(event.target.value));
  }

  return (
    <div>
      <input className={styles.input} type="text" placeholder='Название задачи' value={value} onChange={handleChange}/>
      <ButtonGoodContainer text={'Добавить'} href={'#'} PV={15} PG={50} MR={0}/>
    </div>
  );
}
