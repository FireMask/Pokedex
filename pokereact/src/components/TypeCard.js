import React from 'react'
import './TypeCard.css'

export const TypeCard = ({ tipo }) => {
  const typeStyle = {
    backgroundColor: tipo.estilo.color,
    borderColor: tipo.estilo.border,
  }

  return (
    <div className="type" style={typeStyle}>
      {tipo.nombre}
    </div>
  )
}
