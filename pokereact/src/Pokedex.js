import React, { useState, useEffect, useRef } from 'react'
import { CardView } from './components/CardView.js'
import { ListView } from './components/ListView.js'
import './Pokedex.css'

function Pokedex() {
  const effectRan = useRef(false)
  const [pokedexCurrentLang, setPokedexCurrentLang] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [gridMode, setGridMode] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (effectRan.current === true) {
      const fetchPokedex = async () => {
        const data = await fetch('http://localhost:1880/pokedex', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        })
        const pokedex_data = await data.json()
        console.log(pokedex_data)
        setPokedexCurrentLang(pokedex_data)
        setPokedex(pokedex_data)
        setSearch('')
      }
      fetchPokedex()
    }

    return () => {
      effectRan.current = true
    }
  }, [])

  useEffect(() => {
    const pkmFilter = pokedexCurrentLang.filter(pokemon => {
      return pokemon.nombre.toLowerCase().includes(search)
    })
    setPokedex(pkmFilter)
  }, [search])

  const handleSearch = event => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleGridMode = () => {
    setGridMode(!gridMode)
  }

  return (
    <div>
      <div>
        <label>Buscar</label>
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <div>
        <label>Gridmode</label>
        <input type="checkbox" checked={gridMode} onChange={handleGridMode} />
      </div>
      <hr />
      {gridMode ? (
        <ListView pokedex={pokedex} />
      ) : (
        <CardView pokedex={pokedex} />
      )}
    </div>
  )
}

export default Pokedex
