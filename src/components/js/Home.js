import React, { Component } from 'react'
import myPhoto from '../img/foto.jpg'
import styles from '../scss/Home.scss'

const Home = () => (
  <div className={ styles.home }>
    <div className={ styles.ribbon }><span className={ styles.ribbonText }>Welcome</span></div>
    <img src={ '/assets/' + myPhoto } alt='Profile photo' />
    <article>
      <header>
        <h2>
          Hi! My name is Igor Chernega and I'm web developer
        </h2>
      </header>
      <section>
        <p>
          This is my personal webpage. You can find here some info about me and
          see my pet projects. They're all deployed on heroku so you can see
          live demo of any of them. Also you can find sources on github. Aliases
          are provided. Welcome!
        </p>
      </section>
    </article>
    <footer>
      <ul>
        <li><a href='https://github.com/avalan4e57'>Github</a></li>
        <li><a href='https://www.facebook.com/profile.php?id=100008337159056'>Facebook</a></li>
      </ul>
    </footer>
  </div>
)

export default Home
