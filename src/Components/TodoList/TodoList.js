import React from 'react'
import './TodoList.css'

const TodoList = ({children}) => {
  return (
    <ul className='todoList'>
        {children}
        {/*uso children para que levante los que 
        estan dentro de las etiquetas TodoList */}
    </ul>
  )
}

export {TodoList}