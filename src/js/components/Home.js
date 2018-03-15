import React, { Component } from 'react'
// import myPhoto from '../../img/foto.jpg'
import styles from '../../styles/Home.scss'
// import homeImg from '../../img/home.jpg'

import FaGithub from 'react-icons/lib/fa/github'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaEnvelope from 'react-icons/lib/fa/envelope'

const Home = () => (
    <div className={ styles.home } id='home'>
      <h2>
        Hi! My name is Igor Chernega and I'm web developer
      </h2>
      <div className={ styles.contacts }>
        <ul>
          <li><a href='https://github.com/avalan4e57' target='_blank'><FaGithub /></a></li>
          <li><a href='https://www.facebook.com/iChernega' target='_blank'><FaFacebookSquare /></a></li>
          <li><a href='mailto:am.igor.chernega@gmail.com?subject=Mail_from_Our_Site'><FaEnvelope /></a></li>
        </ul>
      </div>
    </div>
)

export default Home
