import React, { Component } from 'react'
import styles from '../../styles/Card.scss'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { faGlobe } from '@fortawesome/fontawesome-free-solid'


const Card = ({ image, name, description, github, www, gradient }) => (
  // <div className={ styles.card }>
  //   <div className={ styles.image }>
  //     <img src={ image } />
  //     <h2>{ name }</h2>
  //   </div>
  //   <div className={ styles.description }>
  //     <p>{ description }</p>
  //   </div>
  //   <div className={ styles.refferences }>
  //     <a href={ github } className={ styles.github } target='_blank'>GitHub</a>
  //     <a href={ www } className={ styles.www } target='_blank'>www</a>
  //   </div>
  // </div>
  <div className={ styles.card }>
    <div className={ styles.image }>
      <div className={ styles.main } style={ { background: 'linear-gradient(90deg, ' + gradient.begin + ', ' + gradient.end + '), center / cover no-repeat url(' + image + ')' } }>
        <h3>{ name }</h3>
      </div>
      <div className={ styles.links }>
        <a href={ github } className={ styles.github } target='_blank'>
          <FontAwesomeIcon icon={ faGithub } className={ styles.github } />
        </a>
        <a href={ www } className={ styles.www } target='_blank'>
          <FontAwesomeIcon icon={ faGlobe } className={ styles.www } />
        </a>
      </div>
    </div>
    <div className={ styles.description }>
      <p>{ description }</p>
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
