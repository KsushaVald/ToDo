import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <div className={styles.headerblock}>
      <h1 className={styles.header}>todos</h1>
    </div>
  );
}
