import React from 'react';
import styles from './buttons.css';
import { ButtonGood } from '../../../Instruction/ButtonGood';
import { ButtonDisabled } from './ButtonDisabled';

export function Buttons() {
  return (
    <div className={styles.buttons}>
      <ButtonGood text={'Старт'} href={'#'} PV={15} PG={50} MR={25} />
      <ButtonDisabled text={'Стоп'} href={'#'} PV={15} PG={50} MR={0} />
    </div>
  );
}
