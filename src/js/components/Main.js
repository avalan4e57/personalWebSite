import React, { Component } from 'react'
import styles from '../../styles/Main.scss'
import Card from './Card'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move'

const Main = ({ cards }) => (
  <FlipMove className={ styles.container }>
    {
      cards.map((card, index) =>
        <div className={ styles.gridItem } key={ index }>
          <Card
            id={ card.id }
            name={ card.name }
            image={ card.image }
            description={ card.description }
            github={ card.github }
            www={ card.www }
          />
        </div>
      )
    }
  </FlipMove>
)

Main.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      www: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Main
