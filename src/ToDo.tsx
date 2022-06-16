import React, { useEffect, useState } from "react";
import {hot} from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import './main.global.css'
import { Header } from "./shared/Header";
import { ToDoCard } from "./shared/ToDoCard";
import { ToDoForm } from "./shared/ToDoCard/ToDoForm";
import { ToDoList } from "./shared/ToDoCard/ToDoList";
import { ToDoItem } from "./shared/ToDoCard/ToDoList/ToDoItem";
import { todolistContext } from "./shared/context/todolistContext";

const TODOLIST = [{id: 0, isDone: false, name: 'To buy milk'}, {id: 1, isDone: true, name: 'To write email'}]

function ToDoComponent() {
  const [list, setList] = useState(TODOLIST);
  const TodoListProvider = todolistContext.Provider;
  useEffect(()=>{

  }, [list.length]);
  return (
    <TodoListProvider
      value={{
        list: list,
        onChange: setList
      }}
    >
      <Layout>
        <Header/>
        <ToDoCard>
          <ToDoForm />
          <ToDoList>
            {list.map(item =>(
              <ToDoItem id={item.id} isDone={item.isDone} name={item.name}/>
            ))}
          </ToDoList>
        </ToDoCard>
      </Layout>
    </TodoListProvider>


  )
}

export const ToDo = hot(()=> <ToDoComponent/>);


