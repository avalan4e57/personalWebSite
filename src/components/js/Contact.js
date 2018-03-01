import React from 'react'
import styles from '../scss/Contact.scss'
import { Parallax } from 'react-parallax'
import contactImg from '../img/contact.jpg'

const Contact = () => (
  <Parallax strength={300} bgImage={ contactImg }>
  <div className={ styles.contact }>
    <div className={ styles.container }>
      <header>
        <h2>contact form</h2>
        <p>Nunc diam leo, fringilla vulputate elit lobortis, consectetur vestibulum quam. Sed id felis ligula. In euismod libero at magna dapibus, in rutrum velit lacinia. Etiam a mi quis arcu varius condimentum.</p>
      </header>
      <section className={ styles.userInput }>
        <section className={ styles.inputs }>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='text' name='subject' placeholder='Subject' />
        </section>
        <textarea name='message' rows='6' placeholder='Your message here...'></textarea>
      </section>
      <button type='submit' className={ styles.submitButton }>Send</button>
    </div>
  </div>
</Parallax>
)

export default Contact
