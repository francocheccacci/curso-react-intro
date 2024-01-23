import './App.css';
import './styles.css';
import React, { useState } from 'react';
import {TodoCounter} from './Components/TodoCounter/TodoCounter.js'; 
import {TodoSearch} from './Components/TodoSearch/TodoSearch.js';
import {TodoList} from './Components/TodoList/TodoList.js';
import {TodoItem } from './Components/TodoItem/TodoItem.js';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton.js';
import { useStorage } from './Hooks/useStorage.js';
import {ModalTodo} from './Components/ModalAddTodo/ModalAddTodo.js';

function App() {
    // const testTodo = [
    //   {text:'Hola', completed:true},
    //   {text:'como estas perro', completed:true},
    //   {text:'me aburro', completed:false},
    //   {text:'que poronga hermano', completed:false},
    // ]

  // states 
  const [searchValue, setSearchValue] = useState('')

  const [todos, saveTodos] = useStorage('TODOS_V1', [])




  //filter todos
  const searchedTodos = todos.filter( (todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()) )
  //complete and delete todo
  const completeTodo = (text) =>{
    const newTodos = [...todos]
    newTodos.forEach( (todo) =>{
      if (todo.text === text && !todo.completed){
        todo.completed = true;
      }else if(todo.text === text && todo.completed){
        todo.completed = false;
      }
    })
    saveTodos(newTodos);
  }


  
  const deteleTodo = (text) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter( (todo) => todo.text.toLowerCase() !== text.toLowerCase() )
    localStorage.setItem('TODOS_V1', JSON.stringify(filterTodos))
    saveTodos(filterTodos);
  }

  return (
    <React.Fragment>
   
       <div className="flex  flex-col w-10/12 mx-auto container min-h-[60vh] max-h-[70vh]">
         <TodoCounter completed={todos.filter((todo) => todo.completed === true).length} total={todos.length}/> 
         <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
         <TodoList>
           {searchedTodos.map(todo =>{
             return <TodoItem onDelete={()=>deteleTodo(todo.text)} onComplete={() => completeTodo(todo.text)} key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>
           })}
 
         </TodoList>
 
         
       </div>
       
       <CreateTodoButton todos={todos} saveTodos={saveTodos}></CreateTodoButton>
       <ModalTodo></ModalTodo> 
    
    </React.Fragment>
  );
}

export default App;
