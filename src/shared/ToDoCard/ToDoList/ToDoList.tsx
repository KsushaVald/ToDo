import React from 'react';
import styles from './todolist.css';

interface IToDoListProps {
  children: React.ReactNode;
}

export function ToDoList({children}:IToDoListProps) {
  return (
    <ul className={styles.todolist}>
      {children}
    </ul>
  );
}
