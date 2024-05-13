import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  },[])

  const {
    isLoading,
    page,
    pokemons,
} = useSelector( state => state.pokemons );

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True': 'false' } </span>
      <ul>
        { 
          pokemons.map(({name}) => <li key={ name } >{ name }</li>)
        }
      </ul>
      <button
        disabled= { isLoading }
        onClick={ ()=> dispatch( getPokemons(page) ) }
      >
        Next
      </button>
    </>
  )
}

export default App
