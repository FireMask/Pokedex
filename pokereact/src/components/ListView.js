import React from 'react'
import { BASE_URL } from './../utils/env_var'
import { TypeCard } from './TypeCard.js'

const tableStyle = {
  border: '1px solid',
  borderColor: '#A2A2A2',
}

const rowStyle = {
  height: '25px',
}

export const ListView = ({ pokedex }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>#</th>
          <th>Sprite</th>
          <th>Nombre</th>
          <th>Tipo primario</th>
          <th>Tipo secundario</th>
          {Object.keys(pokedex[0].base).map((key, index) => {
            return <th key={index}>{key}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {pokedex.map((pokemon, index) => {
          return (
            <tr style={rowStyle} key={index}>
              <td>{pokemon.id}</td>
              <td>
                <img src={`${BASE_URL}/sprite/${pokemon.id}`} />
              </td>
              <td>{pokemon.nombre}</td>
              <td>
                <TypeCard tipo={pokemon.tipos[0]} />
              </td>
              <td>
                {pokemon.tipos[1] && <TypeCard tipo={pokemon.tipos[1]} />}
              </td>
              {Object.values(pokedex[0].base).map((value, index) => {
                return <td key={index}>{value}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
