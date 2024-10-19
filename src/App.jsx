
import './App.css'
import { useMovies } from './hooks/useMovies.js';
import {Movies} from './components/Movies.jsx';
import {useEffect, useState} from 'react';

// Comentario de Incio

function App() {
  const {movies} = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = (event) => {
    event.preventDefault()
    const {query} = Object.fromEntries(new window.FormData(event.target))//new window.FormData(event.target)
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

    useEffect(()=>{
      if(query===''){
        setError('Campo de busqueda vacio')
        return
      }

      if (query.match(/^\d+$/)){
        setError('No se pueden consultar pelicolas con un número')
        return
      }

      if (query.length <3){
        setError('La busqueda debe tener como minimo 3 caracteres.')
        return
      }
      
      setError(null)
    },[query])

  return (
    

    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error? 'red':'transparent'
          }} onChange={handleChange} value = {query} name='query' placeholder='Avengers, Star Wars' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}/>        
      </main>
    </div>
  )
}

export default App
