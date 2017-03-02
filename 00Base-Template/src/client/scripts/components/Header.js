import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <h1><Link to="/">Durian</Link></h1>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    )
  }
}

export default Header;
