import React, { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({

    todos:[{
            id:1,
            text: "Hello world",       
            completed: false
    }],
    addTodo:()=>{},
    removeTodo:()=>{},
    editTodo:()=>{},
    completeTodo:()=>{}
})

export default function useTodo(){
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

