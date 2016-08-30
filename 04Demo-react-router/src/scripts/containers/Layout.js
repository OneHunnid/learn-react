import React from 'react'
import Header from '../components/Header'

//The parent will use this.props.children to determine its location.
// All components have this.props.children as a prop, but it's only
// when components are nested that the parent component gets this
// prop filled automatically by React.
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <section className="container">
          {this.props.children}
        </section>
      </div>
    )
  }
}
