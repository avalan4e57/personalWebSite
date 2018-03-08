import React from 'react'
import styles from '../../styles/Contact.scss'
import { Parallax } from 'react-parallax'
import contactImg from '../../img/contact.jpg'

const Contact = ({
  formInputName,
  formInputEmail,
  formInputSubject,
  formInputBody,
  onNameInput,
  onEmailInput,
  onSubjectInput,
  onBodyInput,
  onFormSubmit
}) => (
  <Parallax strength={300} bgImage={ contactImg }>
  <div className={ styles.contact }>
    <div className={ styles.container }>
      <header>
        <h2>contact form</h2>
        <p>Thanks for your interest in my personal website and portfolio pet projects. Please use this form if you have any questions or if you want to hire me</p>
      </header>
      <section className={ styles.userInput }>
        <section className={ styles.inputs }>
          <input type='text' name='name' placeholder='Name' value={ formInputName } onChange={ onNameInput } />
          <input type='email' name='email' placeholder='Email' value={ formInputEmail } onChange={ onEmailInput } />
          <input type='text' name='subject' placeholder='Subject' value={ formInputSubject } onChange={ onSubjectInput } />
        </section>
        <textarea name='message' rows='6' placeholder='Your message here...' value={ formInputBody } onChange={ onBodyInput } ></textarea>
      </section>
      <button onClick={ (e) => { e.preventDefault(); onFormSubmit(formInputName, formInputEmail, formInputSubject, formInputBody)} } type='submit' className={ styles.submitButton }>Send</button>
    </div>
  </div>
</Parallax>
)

export default Contact
