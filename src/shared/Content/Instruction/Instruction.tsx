import React from 'react';
import styles from './instruction.css';

export function Instruction() {
  return (
    <div className={styles.block}>
      <h1 className={styles.header}>Ура! Теперь можно начать работать:</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}><span>Выберите категорию и напишите название текущей задачи</span></li>
        <li className={styles.listItem}><span>Запустите таймер («помидор»)</span></li>
        <li className={styles.listItem}><span>Работайте пока «помидор» не прозвонит</span></li>
        <li className={styles.listItem}><span>Сделайте короткий перерыв (3-5 минут)</span></li>
        <li className={styles.listItem}><span>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</span></li>
      </ul>
      <input className={styles.input} type="text" placeholder='Название задачи'/>
      <button className={styles.btn}>Добавить</button>
    </div>
  );
}
