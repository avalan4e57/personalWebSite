import React, { Component } from 'react'

import styles from '../../styles/App.scss'
import ContactIcons from './ContactIcons'
import Home from './Home.js'
import VisibleProjects from '../containers/VisibleProjects'
import ContactForm from '../containers/ContactForm'

const App = () => (
    <div className={ styles.app }>
      {/* <ContactIcons /> */}
      <Home />
      <VisibleProjects />
      <ContactForm />
    </div>
)

export default App
