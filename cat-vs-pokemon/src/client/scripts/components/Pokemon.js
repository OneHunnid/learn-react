import React from 'react'
import { connect } from 'react-redux'
import './Pokemon.scss'

class Pokemon extends React.Component {
  render() {
    const id = this.props.pokemon.id
    const name = this.props.pokemon.name
    const url = this.props.pokemon.sprites.front_shiny

    return (
      <div className="pokemon">
        <h2 className="pokemon__name">{name} (ID: {id})</h2>
        <img className="pokemon__image" src={url} alt={name} />
      </div>
    )
  }
}

export default connect()(Pokemon)
