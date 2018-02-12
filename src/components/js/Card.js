import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    let symbol = null

    return(
      <div className={ styles.card }>
        <div className={ styles.image }>
          <img src={ this.props.image } />
        </div>
        <div className={ styles.description }>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.description }</p>
        </div>
      </div>
    )
  }
}

export default Card
