import React from 'react'
import { connect } from 'react-redux'
import { clearContenders } from '../actions/clearContenders'
import { fetchCat } from '../actions/fetchCat'
import { fetchPokemon } from '../actions/fetchPokemon'
import Cat from '../components/Cat'
import Pokemon from '../components/Pokemon'
import './CatVsPokemon.scss'

/**
 * @todo
 */
export default class CatVsPokemon extends React.Component {

  /**
   * @todo
   */
  constructor(props) {
    super(props)
    this.__handleRefreshClick = this.__handleRefreshClick.bind(this)
    this.state = {
      loading: false
    }
  }

  /**
   * @todo
   */
  __handleRefreshClick(evt) {
    this.__triggerActions()
  }

  /**
   * @todo
   */
  __hasContenders() {
    return this.props.cat && this.props.pokemon
  }

  /**
   * @todo
   */
  __isLoading() {
    return this.state.loading
  }

  /**
   * @todo
   */
  __triggerActions() {
    if (this.__isLoading()) {
      return
    }

    if (this.__hasContenders()) {
      this.props.dispatch(clearContenders())
    }

    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchPokemon())
    this.setState({ loading: true })
  }

  /**
   * @todo
   */
  componentWillMount() {
    this.__triggerActions()
  }

  /**
   * @todo
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.cat && nextProps.pokemon) {
      this.setState({ loading: false })
    }
  }

  /**
   * @todo
   */
  render() {
    if (!this.__hasContenders()) {
      return (
        <main className="cat-vs-pokemon">
          <section className="cat-vs-pokemon__no-contenders">
            <p>Waiting for contenders.</p>
          </section>
        </main>
      )
    }

    return (
      <main className="cat-vs-pokemon">
        <button
          className="cat-vs-pokemon__refresh-button"
          onClick={this.__handleRefreshClick}>
          Refresh
        </button>
        <div class="cat-vs-pokemon__contenders">
          <section className="cat-vs-pokemon__contenders__cat">
            <Cat cat={this.props.cat} />
          </section>
          <p className="cat-vs-pokemon__contenders__vs">vs.</p>
          <section className="cat-vs-pokemon__contenders__pokemon">
            <Pokemon pokemon={this.props.pokemon} />
          </section>
        </div>
      </main>
    )
  }
}

/**
 * @todo
 */
const mapStateToProps = (store) => {
  return {
    cat: store.app.cat,
    pokemon: store.app.pokemon
  }
}

/**
 * @todo
 */
export default connect(mapStateToProps)(CatVsPokemon)
