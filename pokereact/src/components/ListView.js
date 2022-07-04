import React from 'react'
import { TypeCard } from './TypeCard.js'

const tableStyle = {
  border: '1px solid',
  borderColor: '#A2A2A2',
}

const rowStyle = {
  height: '25px',
}

export const ListView = ({ pokedex }) => {
  console.log(pokedex[0])
  return (
    <table style={tableStyle}>
      <thead>
        <th>#</th>
        <th>Sprite</th>
        <th>Nombre</th>
        <th>Tipo primario</th>
        <th>Tipo secundario</th>
        {Object.keys(pokedex[0].base).map((key, index) => {
          return <th key={index}>{key}</th>
        })}
      </thead>
      <tbody>
        {pokedex.map(pokemon => {
          return (
            <tr style={rowStyle}>
              <td>{pokemon.id}</td>
              <td>
                <img src={`http://localhost:1880/sprite/${pokemon.id}`} />
              </td>
              <td>{pokemon.nombre}</td>
              <td>
                <TypeCard tipo={pokemon.tipos[0]} />
              </td>
              <td>
                {pokemon.tipos[1] && <TypeCard tipo={pokemon.tipos[1]} />}
              </td>
              {Object.values(pokedex[0].base).map((value, index) => {
                return <td>{value}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}