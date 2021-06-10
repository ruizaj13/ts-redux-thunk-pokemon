import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootStore } from './store';
import { GetPokemon } from './actions/pokemonActions';

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const pokemonState = useSelector((state: RootStore) => state.pokemon)
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value)
  }

  const handleClick = () => {
    dispatch(GetPokemon(pokemonName))
  }

  return (
    <div className="App">
      <input type='text' onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt=''/>
            {pokemonState.pokemon.abilities.map( ability => {
              return <p>{ability.ability.name}</p>
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
