import React, { Component } from 'react'
import myPhoto from '../../img/foto.jpg'
import styles from '../../styles/Home.scss'
import { Parallax } from 'react-parallax'
import homeImg from '../../img/home.jpg'

const Home = () => (
  <Parallax strength={300} bgImage={ homeImg }>
    <div className={ styles.home } id='home'>
      <img src={ myPhoto } alt='Profile photo' />
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
    </div>
  </Parallax>
)

export default Home
