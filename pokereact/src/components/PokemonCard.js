import React from 'react'
import { BASE_URL } from './../utils/env_var'
import { TypeCard } from './TypeCard.js'
import './PokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="sprite">
        <img src={`${BASE_URL}/sprite/${pokemon.id}`} />
      </div>
      <div className="pkmName">
        {pokemon.id} - {pokemon.nombre}
      </div>
      <div className="typeName">
        {pokemon.tipos.map((tipo, key) => {
          return <TypeCard tipo={tipo} key={key} />
        })}
      </div>
    </div>
  )
}
