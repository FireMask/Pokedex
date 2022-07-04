import React from 'react'
import { PokemonCard } from './PokemonCard.js'

export const CardView = ({ pokedex }) => {
  return (
    <div className="cardContainer">
      {pokedex.map((pokemon, key) => {
        return <PokemonCard pokemon={pokemon} key={key} />
      })}
    </div>
  )
}
