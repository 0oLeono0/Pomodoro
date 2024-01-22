import React from 'react';
import styles from './instruction.css';
import { Header } from './Header';
import { List } from './List';
import { Input } from './Input';
import { ButtonGood } from './ButtonGood';
import { Tasks } from './Tasks';

export function Instruction() {
  return (
    <div className={styles.block}>
      <Header/>
      <List/>
      <Input/>
      <Tasks/>
    </div>
  );
}
