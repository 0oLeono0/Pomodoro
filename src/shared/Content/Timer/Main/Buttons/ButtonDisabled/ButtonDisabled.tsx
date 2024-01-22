import React from 'react';
import styles from './buttondisabled.css';
import { IButtonProps } from '../../../../Instruction/ButtonGood';

export function ButtonDisabled({ text, href }: IButtonProps) {
  return (
    <a className={styles.button} href={href}>
      {text}
    </a>
  );
}
