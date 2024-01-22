import React, { MouseEventHandler } from 'react';
import styles from './buttongood.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { addTask, updateTask } from '../../../../store/task/actions';
import { ButtonGood } from '../ButtonGood';

export interface IButtonProps {
  text: string;
  href: string;
  PV: number;
  PG: number;
  MR: number;
};

export function ButtonGoodContainer(props: IButtonProps) {
  const tasks = useSelector<RootState, Array<string>>(state => state.task.tasks);
  const value = useSelector<RootState, string>(state => state.task.taskText);

  const dispatch = useDispatch();

  function handleClick() {
    const newTasks = [...tasks, value]
    dispatch(addTask(newTasks));
    dispatch(updateTask(''));;
  }
  
  const style = {
    marginRight: `${props.MR}px`,
    padding: `${props.PV}px ${props.PG}px`
  };
  return (
    <ButtonGood text={props.text} href={props.href} PV={props.PV} PG={props.PG} MR={props.MR} onClick={handleClick}/>
  );
}
