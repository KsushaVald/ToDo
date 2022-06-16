import React, { useContext, useEffect, useState } from 'react';
import { todolistContext } from '../../../context/todolistContext';
import styles from './todoitem.css';

export interface IToDoItemProps {
  id: number,
  isDone: boolean;
  name: string;
}

export function ToDoItem({id, isDone, name}: IToDoItemProps) {
  const [done, setDone] = useState(isDone);
  const {list, onChange} = useContext(todolistContext);
  function handleClick(e: Event & {target: HTMLButtonElement}) {
    let itemId = Number(e.target.id);
    let newlist = [... list];
    if(done) {
      setDone(false);
      newlist[itemId].isDone=false;
    }
    else {
      setDone(true);
      newlist[itemId].isDone=true;
    }
    onChange(newlist);
  }

  useEffect(()=>{

  }, [done]);

  return (
    <li className={styles.todoitem}>
      <button className={done ? styles.todoitemBtnDone : styles.todoitemBtnNoDone} onClick={handleClick} id={String(id)}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#00e100" stroke="none"><path d="M17806 18670 c-79 -20 -171 -79 -267 -171 -52 -50 -83 -84 -69 -75 34 23 179 91 275 131 109 45 209 74 286 84 l64 7 -40 13 c-53 16 -200 23 -249 11z"/><path d="M17511 18630 c-90 -50 -162 -111 -212 -181 l-24 -34 50 29 c62 36 108 69 163 120 38 35 89 96 80 96 -2 0 -27 -14 -57 -30z"/><path d="M16295 18625 c-189 -27 -267 -55 -575 -213 -728 -372 -1284 -725 -1838 -1168 -458 -365 -1192 -1095 -1727 -1719 -698 -812 -1234 -1521 -1840 -2435 -430 -650 -611 -963 -955 -1655 -275 -553 -458 -968 -725 -1640 -332 -836 -554 -1464 -869 -2465 -180 -573 -470 -1581 -592 -2062 -21 -82 -40 -148 -44 -148 -6 0 -225 373 -395 675 -659 1167 -1737 3017 -1821 3125 -90 117 -238 241 -337 284 -95 41 -147 51 -272 51 -132 -1 -187 -13 -312 -70 -39 -18 -89 -36 -110 -40 -50 -8 -89 -30 -154 -85 -40 -35 -61 -63 -90 -125 -20 -44 -43 -100 -50 -124 l-13 -44 -174 7 c-167 7 -174 7 -167 -11 101 -254 175 -507 159 -546 -15 -41 -43 -19 -192 150 -137 156 -262 282 -300 302 -22 12 -22 11 -17 -31 24 -179 51 -279 127 -473 70 -178 452 -938 646 -1285 486 -871 843 -1505 1329 -2363 654 -1155 1044 -2011 1189 -2613 54 -226 87 -274 237 -348 353 -174 733 -191 1159 -52 262 85 476 213 653 391 183 182 283 349 335 556 45 179 221 818 274 994 24 83 86 294 136 470 50 176 124 433 165 570 40 138 112 385 160 550 82 286 215 729 433 1450 383 1263 893 2574 1526 3923 180 383 626 1278 786 1578 745 1389 1172 2081 1753 2839 599 781 1272 1470 2018 2065 637 509 1330 952 2029 1297 281 139 364 188 376 225 17 55 -83 83 -271 75 -101 -3 -129 -8 -175 -30 -109 -50 -529 -227 -700 -295 -281 -112 -460 -164 -460 -134 0 18 86 88 280 227 113 81 245 180 295 219 l89 71 -83 3 c-79 3 -89 1 -198 -44 -124 -50 -202 -68 -188 -43 4 8 17 24 28 37 11 12 16 22 11 22 -5 0 -77 -29 -161 -65 -152 -64 -350 -135 -379 -135 -34 0 -4 38 102 129 61 53 131 113 155 134 l44 39 -85 -45 c-130 -68 -462 -242 -587 -308 -62 -33 -113 -58 -113 -56 0 3 30 23 68 45 229 135 600 357 617 369 17 11 11 13 -50 12 -39 -1 -110 -7 -160 -14z"/></g></svg>
      </button>
      <h2 className={done ? styles.todoitemNameDone : styles.todoitemNameNoDone}>{name}</h2>
    </li>
  );
}
