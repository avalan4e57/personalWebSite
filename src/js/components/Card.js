import React, { Component } from 'react'
import styles from '../../styles/Card.scss'
import PropTypes from 'prop-types'

const Card = ({ image, name, description, github, www }) => (
  <div className={ styles.card }>
    <div className={ styles.image }>
      <img src={ image } />
    </div>
    <div className={ styles.description }>
      <h2>{ name }</h2>
      <p>{ description }</p>
    </div>
    <div className={ styles.refferences }>
      <a href={ github } className={ styles.github } target='_blank'>GitHub</a>
      <a href={ www } className={ styles.www } target='_blank'>www</a>
    </div>
  </div>
)

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  www: PropTypes.string.isRequired
}

export default Card
