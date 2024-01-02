import React from 'react'
import './TodoItem.css';

const TodoItem = ({text, completed, onComplete, onDelete}) => {
  return (
    <li className='todoItem'>
        <span onClick={onComplete} className={`completed ${completed ? 'completed--active' : ''}`}>✔</span>
        <p className={`todoItem-p ${completed ? 'todoItem-p--completed' : ''}`}>{text}</p>
        <span onClick={onDelete} className='remove'>✖</span>

    </li>
  )
}


export {TodoItem}