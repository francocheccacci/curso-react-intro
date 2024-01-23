const TodoCounter = ({completed, total}) => {
  return (
    <div className='flex justify-center pt-6'>
       <h2 className='text-4xl font-bold text-center'>
        Completaste <span className='text-blue-500'>{completed}</span> de <span className='text-blue-500'>{total}</span> tareas.
       </h2>
    </div>
  )
}

export {TodoCounter}