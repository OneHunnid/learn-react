import React from 'react'
import { connect } from 'react-redux'
import { capitalize } from 'lodash'
import './Pokemon.scss'

class Pokemon extends React.Component {
  render() {
    const id = this.props.pokemon.id
    const name = this.props.pokemon.name
    const url = `https://img.pokemondb.net/artwork/${name}.jpg`
    const capitalizedName = capitalize(name)

    return (
      <div className="pokemon">
        <h2 className="pokemon__name">{capitalizedName} (ID: {id})</h2>
        <img className="pokemon__image" src={url} alt={capitalizedName} />
      </div>
    )
  }
}

export default connect()(Pokemon)
