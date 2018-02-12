import React, { Component } from 'react'
import styles from './../scss/Main.scss'
import Card from './Card'

class Main extends Component {
  render() {
    return(
      <div className={ styles.container }>
        {
          this.props.cards.map((card, index) =>
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
      </div>
    )
  }
}

export default Main
