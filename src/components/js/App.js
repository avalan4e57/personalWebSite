import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import styles from './../scss/App.scss'
import Home from './Home.js'
import Projects from './Projects.js'
import Header from './Header.js'
import Navigation from './Navigation.js'
import data from './../../projectsData.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      queryInput: ''
    }

    this.toggleSelect = this.toggleSelect.bind(this)
    this.execQuery = this.execQuery.bind(this)
    this.readQuery = this.readQuery.bind(this)
  }

  componentDidMount() {
    // fetch('https://api.punkapi.com/v2/beers/')
    //   .then(resp => resp.json())
    //   .then(data => {
    //     let cards = data.map(item => ({
    //         id: item.id,
    //         image: item.image_url,
    //         name: item.name,
    //         description: item.description,
    //         selected: false
    //       })
    //     )
    //     this.setState({ cards: cards })
    //   })
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
    console.log(cards[0])
  }

  toggleSelect(id) {
    this.setState({ cards: this.state.cards.map(card =>
      {
        if (card.id == id) {
          card.selected = !card.selected
        }
        return card
      }
    ) })
  }

  execQuery() {
    fetch('https://api.punkapi.com/v2/beers/' + this.state.queryInput)
      .then(resp => resp.json())
      .then(data => {
        let cards = data.map(item => ({
            id: item.id,
            image: item.image_url,
            name: item.name,
            description: item.description,
            selected: false
          })
        )
        this.setState({ cards: cards })
      })
  }

  readQuery(e) {
    this.setState({ queryInput: e.target.value })
  }

  render() {
    return(
      <Router>
        <div className='app'>
          <Header />
          <Navigation />

          <Route exact path='/' render={ () => <Home /> } />
          <Route path='/projects' render={ () => <Projects cards={ this.state.cards } /> } />
        </div>
      </Router>
    )
  }
}

export default App
