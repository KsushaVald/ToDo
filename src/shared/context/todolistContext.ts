import React from "react";
import { IToDoItemProps } from "../ToDoCard/ToDoList/ToDoItem"


type todolistContextType = {
  list: IToDoItemProps[],
  onChange: (value:IToDoItemProps[])=>void;
}

export const todolistContext = React.createContext<todolistContextType>({
  list: [],
  onChange: ()=>{},
})
