import React from 'react'

export const DetailCard = ({ detalle }) => {
  return (
    <>
      <div>HP: {detalle['HP']}</div>
      <div>Attack: {detalle['Attack']}</div>
      <div>Defense: {detalle['Defense']}</div>
      <div>Sp. Attack: {detalle['Sp. Attack']}</div>
      <div>Sp. Defense: {detalle['Sp. Defense']}</div>
      <div>Speed: {detalle['Speed']}</div>
    </>
  )
}
