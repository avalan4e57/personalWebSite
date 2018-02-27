import React, { Component } from 'react'
import Main from './Main.js'
import data from './../../projectsData.json'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./../img/projects/', false, /\.(png|jpe?g|svg)$/));

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
        image: '/assets/' + images[item.image],
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
        <Main cards={ this.state.cards } />
      </div>
    )
  }
}

export default Projects
