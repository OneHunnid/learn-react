import React from 'react'
import { connect } from 'react-redux'
import { capitalize } from 'lodash'
import './Contender.scss'

class Contender extends React.Component {
  render() {
    const { corner, id, name, url } = this.props
    const capitalizedName = capitalize(name)

    return (
      <div className="contender">
        <h2 className="contender__name--{corner}">
          {capitalizedName} (ID: {id})
        </h2>
        <img className="contender__image" src={url} alt={capitalizedName} />
      </div>
    )
  }
}

export default connect()(Contender)
