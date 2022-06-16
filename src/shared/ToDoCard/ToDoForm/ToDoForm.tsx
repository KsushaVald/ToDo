import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { todolistContext } from '../../context/todolistContext';
import styles from './todoform.css';

export function ToDoForm() {
  const {list, onChange} = useContext(todolistContext);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('')

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    setInputValue(e.target.value)
  }

  function handlSubmit(e:FormEvent) {
    e.preventDefault();
    let newlist = [...list];
    if(inputValue){
      setError('');
      newlist.push({id: list.length, isDone:false, name: inputValue})
      onChange(newlist)
    }
    else {
      setError('Please, enter your a business');
    }
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handlSubmit}>
        <input id="todoinput" className={styles.todoInput} type="text" placeholder='What needs to be done?' onChange={handleChange}/>
        <button className={styles.todoBtn} aria-label="Add">
          <svg className={styles.todoBtnSvg} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.375 1.75L12.625 13L1.375 24.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
      {error && (<p className={styles.todoFormError}>{error}</p>)}
    </div>
  );
}
