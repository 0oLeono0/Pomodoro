import React from 'react';
import styles from './dropdownlist.css';
import { Icons, EIcon } from '../../../../Icon/Icon';

interface IDropdownListProps {
  postId: string;
  onClose?: () => void;
}

export function DropdownList({ postId, onClose }: IDropdownListProps) {
  return (
    <ul className={styles.itemsList}>
      <li className={styles.item}>
        <Icons name={EIcon.enlarge} size={15} />
        Увеличить
      </li>

      <li className={styles.item}>
        <Icons name={EIcon.decrease} />
        Уменьшить
      </li>

      <li className={styles.item}>
        <Icons name={EIcon.edit} size={12} />
        Редактировать
      </li>

      <li className={styles.item}>
        <Icons name={EIcon.delete} size={14} />
        Удалить
      </li>
    </ul>
  );
}
