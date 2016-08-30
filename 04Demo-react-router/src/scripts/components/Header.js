import React from 'react'
import { Link } from 'react-router'

// Simple React Component that contains logo and navigation
// Uses 'Link' instead of <a> with React-Router. Tis more powerful.
export default class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="header">
        <Link className="logo" to="/">Foobar</Link>
        <div className="nav">
          <Link className="nav-item" activeClassName="is-active" to="/">Home</Link>
          <Link className="nav-item" activeClassName="is-active" to="/about">About</Link>
          <Link className="nav-item" activeClassName="is-active" to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}
