import React, { Component } from 'react'
import Main from './Main.js'
import data from './../../projectsData.json'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      queryInput: ''
    }
  }

  componentDidMount() {
    let cards = data.map(item => ({
        id: item.id,
        image: item.image,
        name: item.name,
        description: item.description,
        github: item.github,
        www: item.www
      })
    )
    this.setState({ cards: cards })
  }

  render() {
    return(
      <div>
        <h1>My pet projects</h1>
        <Main ccards={ this.state.cards } />
      </div>
    )
  }
}

export default Projects
