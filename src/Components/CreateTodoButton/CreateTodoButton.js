import React from 'react'
import './CreateTodoButton.css'
 const CreateTodoButton = ({todos, saveTodos}) => {

  const addTodo = () => {
    // agregar un todo al local storage
    const newTodos = [...todos]
    newTodos.push({text:'Nuevo todo', completed:false})
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    saveTodos(newTodos);
  }


  return (

    <div className='container-btn'>
      <button className='todoAddBtn' onClick={addTodo}>+</button>
    </div>
    
  )
}

export {CreateTodoButton}
