import './TodoSearch.css'

 const TodoSearch = ({searchValue, setSearchValue}) => {

  console.log(searchValue)
  return (
    <div className='container-input'>
      <input className='input-search' value={searchValue} onChange={(event) =>{
        setSearchValue(event.target.value)
      }} placeholder='BUSCA TUS TAREAS AQUI' />
    </div>
  )
}

export {TodoSearch}
