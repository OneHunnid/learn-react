import request from 'request-promise'
import { random } from 'lodash'

export const fetchPokemon = () => {
  return request({
    json: true,
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${random(1, 811)}/`,
    withCredentials: false
  }).then((pokemon) => {
    return {
      type: 'FETCH_POKEMON',
      pokemon: {
        id: pokemon.id,
        name: pokemon.name,
        url: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
      }
    }
  }).catch((err) => {
    if (/404/.test(err.statusCode)) {
      return fetchPokemon()
    }
  })
}
