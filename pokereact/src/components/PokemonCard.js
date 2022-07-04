import React, { useState } from 'react'
import { TypeCard } from './TypeCard.js'
import { DetailCard } from './DetailCard.js'
import './PokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
  const pad = (num, size) => {
    num = num.toString()
    while (num.length < size) num = '0' + num
    return num
  }

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
      <div className="pkmStats">
        {isHovering && <DetailCard detalle={pokemon.base} />}
      </div>
    </div>
  )
}
