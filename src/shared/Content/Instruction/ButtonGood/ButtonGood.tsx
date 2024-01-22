import React, { MouseEventHandler } from 'react';
import styles from './buttongood.css';

export interface IButtonProps {
  text: string;
  href: string;
  onClick?: MouseEventHandler;
  PV: number;
  PG: number;
  MR: number;
};

export function ButtonGood(props: IButtonProps) {
  const style = {
    marginRight: `${props.MR}px`,
    padding: `${props.PV}px ${props.PG}px`
  };
  return (
    <a className={styles.button} style={style} href={props.href} onClick={props.onClick}>
      {props.text}
    </a>
  );
}
