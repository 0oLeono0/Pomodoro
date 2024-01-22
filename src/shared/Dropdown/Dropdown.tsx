import React, { useEffect, useRef } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';
import { DropdownList } from '../Content/Instruction/Tasks/DropdownList';

interface DropdownProps {
  position: { x: number; y: number; h: number };
  onClose?: () => void;
}

export function Dropdown(props: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div
      className={styles.container}
      style={{ left: props.position.x, top: props.position.y + props.position.h}}
      ref={ref}
    >
      <div className={styles.listContainer}>
        <div className={styles.list}>
          <DropdownList postId='1234' onClose={props.onClose}/>
        </div>
      </div>
    </div>
  ), node);
}
