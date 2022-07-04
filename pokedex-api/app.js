const PORT = 1880
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const pokedex_json = require('./pokedex/pokemon/pokedex')
const types_json = require('./pokedex/pokemon/types')

app.get('/pokedex', (req, res) => {
  const idioma = req.query.lang ? req.query.lang : 'english'
  const filterLang = pokedex_json.map(pokemon => {
    const types = pokemon.type.map(tipo => {
      const typeCurrentLang = types_json.find(x => x.id == tipo)
      let typeLang = idioma === 'french' ? 'english' : idioma
      return {
        nombre: typeCurrentLang.lang[typeLang],
        estilo: typeCurrentLang.styles,
      }
    })

    return {
      id: pokemon.id,
      nombre: pokemon.name[idioma],
      tipos: types,
      base: pokemon.base,
    }
  })

  res.status(200)
  res.json(filterLang)
})

const pad = (num, size) => {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

app.get('/sprite/:id', (req, res) => {
  const id = req.params.id
  res.set('Content-Type', 'image/png')
  const filePath = `${__dirname}/pokedex/pokemon/img/sprites/${pad(
    id,
    3
  )}MS.png`
  res.sendFile(filePath)
})

app.listen(PORT, error => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    )
  else console.log("Error occurred, server can't start", error)
})
