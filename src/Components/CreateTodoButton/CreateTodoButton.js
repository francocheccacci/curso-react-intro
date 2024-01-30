import React from 'react'
import './CreateTodoButton.css'
 const CreateTodoButton = ({todos, saveTodos, onOpen}) => {

  return (

    <div className='container-btn'>
      <button className='todoAddBtn' onClick={onOpen}>+</button>
    </div>
    
  )
}

export {CreateTodoButton}
