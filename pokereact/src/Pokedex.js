import React, { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { CardView } from './components/CardView'
import { ListView } from './components/ListView'
import './Pokedex.css'

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([])
  const [gridMode, setGridMode] = useState(false)
  const [search, setSearch] = useState('')
  const [pokedexComplete, isLoading, error] = useFetch('/pokedex')

  useEffect(() => {
    setPokedex(pokedexComplete)
    setSearch('')
  }, [isLoading])

  const handleSearch = event => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleGridMode = () => {
    setGridMode(!gridMode)
  }

  useEffect(() => {
    const pkmFilter = pokedexComplete.filter(pokemon => {
      return pokemon.nombre.toLowerCase().includes(search)
    })
    setPokedex(pkmFilter)
  }, [search])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

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
