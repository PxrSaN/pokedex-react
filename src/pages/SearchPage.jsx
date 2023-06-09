import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {

  const location = useLocation()  

  const  {globalPokemons} = useContext(PokemonContext)

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state))

  return (
    <div>SearchPage</div>
  )
}
