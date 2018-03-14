import React, { Component } from 'react'
import myPhoto from '../../img/foto.jpg'
import styles from '../../styles/Home.scss'
import { Parallax } from 'react-parallax'
import homeImg from '../../img/home.jpg'

import FaGithub from 'react-icons/lib/fa/github'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaEnvelope from 'react-icons/lib/fa/envelope'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/fontawesome-free-brands'
// import { faGlobe } from '@fortawesome/fontawesome-free-brands'
// import { faEnvelope } from '@fontawesome/fontawesome-free-solid'

const Home = () => (
  // <Parallax strength={300} bgImage={ homeImg }>
    <div className={ styles.home } id='home'>
      {/* <img src={ myPhoto } alt='Profile photo' /> */}
      {/* <article> */}
        {/* <header> */}
          <h2>
            Hi! My name is Igor Chernega and I'm web developer
          </h2>
          <div className={ styles.contacts }>
            <ul>
              {/* <FontAwesomeIcon icon={ faGlobe } /> */}
              <li><a href='https://github.com/avalan4e57' target='_blank'><FaGithub /></a></li>
              <li><a href='https://www.facebook.com/iChernega' target='_blank'><FaFacebookSquare /></a></li>
              <li><a href='mailto:am.igor.chernega@gmail.com?subject=Mail_from_Our_Site'><FaEnvelope /></a></li>
              {/* <FontAwesomeIcon icon={ faEnvelope } /> */}
            </ul>
          </div>
        {/* </header> */}
        {/* <section>
          <p>
            This is my personal webpage. You can find here some info about me and
            see my pet projects. They're all deployed on heroku so you can see
            live demo of any of them. Also you can find sources on github. Aliases
            are provided. Welcome!
          </p>
        </section> */}
      {/* </article> */}
    </div>
  // </Parallax>
)

export default Home
