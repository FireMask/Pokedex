import React, { useState } from 'react'
import { TypeCard } from './TypeCard.js'
import './PokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="sprite">
        <img src={`http://localhost:1880/sprite/${pokemon.id}`} />
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
