import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom'
import styles from './../scss/App.scss'
import Home from './Home.js'
import Projects from './Projects.js'
import Header from './Header.js'
import Navigation from './Navigation.js'
import Contact from './Contact.js'
import ProjectFilter from './ProjectFilter.js'
import VisibleProjects from './containers/VisibleProjects.js'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

// const parallaxScroll = (block) => (
//   let elmnt = document.getElementById('block')
//   elmnt.style['background-position-y'] = window.scrollTop - elmnt.offsetTop / 1.3 + 'px'
//   // $(block).css('background-position-y', ($(window).scrollTop() - $(block).offset().top) / 1.3 + 'px')
// )
// const elmnt = document.getElementById('home')

// const parallaxScrollAll() => (
//   parallaxScroll('home')
// )

// window.addEventListener('scroll', () => console.log(elmnt))

const App = () => (
  // <Router>
    <div className={ styles.app }>
      <div className={ styles.contacts }>
        <a href='https://github.com/avalan4e57' className={ styles.github }><FontAwesomeIcon icon={faGithub} /></a>
        <a href='mailto:am.igor.chernega@gmail.com?subject=Mail_from_Our_Site' className={ styles.mail }><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      {/* <Header /> */}
      {/* <Navigation /> */}
      <Home />
      {/* <Projects /> */}
      {/* <ProjectFilter /> */}
      <VisibleProjects />
      <Contact />


      {/* <Route exact path='/' render={ () => <Home /> } />
      <Route path='/projects' render={ () => <Projects /> } /> */}
    </div>
  // </Router>
)

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   componentDidMount() {
//     window.addEventListener('scroll', () => console.log(this.refs.home))
//   }
//   render() {
//     return (
//       <div className='app'>
//         {/* <Header /> */}
//         {/* <Navigation /> */}
//         <Home ref='home' />
//         {/* <Projects /> */}
//         {/* <ProjectFilter /> */}
//         <VisibleProjects />
//         <Contact />
//       </div>
//     )
//   }
// }

export default App
