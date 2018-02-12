import React, { Component } from 'react'
import styles from './../scss/Card.scss'

class Card extends Component {
  render() {
    let symbol = null
    console.log(this.props)
    return(
      <div className={ styles.card }>
        <div className={ styles.image }>
          <img src={ this.props.image } />
        </div>
        <div className={ styles.description }>
          <h2>{ this.props.name }</h2>
          <p>{ this.props.description }</p>
        </div>
        <div className={ styles.refferences }>
          <a href={ this.props.github } className={ styles.github } target='_blank'>GitHub</a>
          <a href={ this.props.www } className={ styles.www } target='_blank'>www</a>
        </div>
      </div>
    )
  }
}

export default Card