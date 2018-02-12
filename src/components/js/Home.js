import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <h1>Home</h1>
        <Main cards={ this.props.cards } />
      </div>
    )
  }
}

export default Home
