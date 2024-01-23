import './TodoSearch.css'

 const TodoSearch = ({searchValue, setSearchValue}) => {

  console.log(searchValue)
  return (
    <div className="flex justify-center items-center pt-8">
      <input className='input-search' value={searchValue} onChange={(event) =>{
        setSearchValue(event.target.value)
      }} placeholder='BUSCA TUS TAREAS AQUI' />
    </div>
  )
}

export {TodoSearch}
