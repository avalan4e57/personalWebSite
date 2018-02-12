import React, { Component } from 'react'
import Main from './Main.js'

class Projects extends Component {
  render() {
    return(
      <div>
        <h1>My pet projects</h1>
        <Main cards={ this.props.cards } />
      </div>
    )
  }
}

export default Projects
