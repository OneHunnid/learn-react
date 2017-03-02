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
      </header>
    )
  }
}

export default Header;
