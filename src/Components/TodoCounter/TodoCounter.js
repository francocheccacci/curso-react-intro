
import './TodoCounter.css'

const TodoCounter = ({completed, total}) => {
  return (
    <div className='container-counter'>
       <h2 className='h2-counter'>
        Completaste <span>{completed}</span> de <span>{total}</span> tareas.
       </h2>
    </div>
  )
}

export {TodoCounter}