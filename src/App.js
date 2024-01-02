import './App.css';
import React, { useState } from 'react';
import {TodoCounter} from './Components/TodoCounter/TodoCounter.js'; 
import {TodoSearch} from './Components/TodoSearch/TodoSearch.js';
import {TodoList} from './Components/TodoList/TodoList.js';
import {TodoItem } from './Components/TodoItem/TodoItem.js';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton.js';



function App() {
  const testTodo = [
    {text:'primer tododa sd asd sa das dasdadasda ', completed:true},
    {text:'segundo todo', completed:true},
    {text:'tercer todo', completed:false},
    {text:'cuarto todo', completed:false},
  ]
  // states 
  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(testTodo);
  
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
    setTodos(newTodos);
  }
  
  const deteleTodo = (text) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter( (todo) => todo.text.toLowerCase() !== text.toLowerCase() )
    setTodos(filterTodos);
  }

  return (
    <React.Fragment>
      <div className='container'>
        <TodoCounter completed={todos.filter((todo) => todo.completed === true).length} total={todos.length}/> 
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList>
          {searchedTodos.map(todo =>{
            return <TodoItem onDelete={()=>deteleTodo(todo.text)} onComplete={() => completeTodo(todo.text)} key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>
          })}

        </TodoList>

        
      </div>
      
      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
