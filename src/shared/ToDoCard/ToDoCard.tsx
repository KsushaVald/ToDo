import React from 'react';
import styles from './todocard.css';

interface IToDoCardProps {
  children: React.ReactNode;
}

export function ToDoCard({children}: IToDoCardProps) {
  return (
    <div className={styles.todoCardContainer}>
      <div className={styles.todoCard}>
        {children}
      </div>
    </div>
  );
}
