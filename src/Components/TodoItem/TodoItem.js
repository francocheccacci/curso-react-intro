import React from 'react'
import './TodoItem.css'
const TodoItem = ({text, completed, onComplete, onDelete}) => {
  return (
    <li className='flex items-center justify-between p-2 w-9/12 bg-todo-item rounded-md my-2 mx-auto h-14'>
        <span onClick={onComplete} className={`text-xl ${completed ? 'line-through text-green-500' : 'text-gray-800'}`}>✔ {text}</span>
        <span onClick={onDelete} className='text-red-500 cursor-pointer'>✖</span>
    </li>
  )
}

export {TodoItem}