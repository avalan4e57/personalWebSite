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

const App = () => (
  <Router>
    <div className='app'>
      <Header />
      <Navigation />

      <Route exact path='/' render={ () => <Home /> } />
      <Route path='/projects' render={ () => <Projects /> } />
    </div>
  </Router>
)

export default App
