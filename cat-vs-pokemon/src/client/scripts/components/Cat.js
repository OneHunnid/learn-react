import React from 'react'
import { connect } from 'react-redux'
import faker from 'faker'
import './Cat.scss'

class Cat extends React.Component {
  render() {
    const id = this.props.cat.id
    const name = faker.name.firstName()
    const url = this.props.cat.url

    return (
      <div className="cat">
        <h2 className="cat__name">{name} (ID: {id})</h2>
        <img className="cat__image" src={url} alt={name} />
      </div>
    )
  }
}

export default connect()(Cat)
