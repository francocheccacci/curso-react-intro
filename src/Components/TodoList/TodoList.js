import React from 'react';

const TodoList = ({children}) => {
  return (
    <ul className='list-none p-4'>
        {children}
    </ul>
  )
}

export {TodoList}