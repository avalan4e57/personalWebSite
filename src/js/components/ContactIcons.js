import React from 'react'

import styles from '../../styles/ContactIcons.scss'

import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaGithub from 'react-icons/lib/fa/github'

const ContactIcons = () => (
  <div className={ styles.contacts }>
    <a href='https://github.com/avalan4e57' className={ styles.github } target='_blank'><FaGithub /></a>
    <a href='mailto:am.igor.chernega@gmail.com?subject=Mail_from_Our_Site' className={ styles.mail }><FaEnvelope /></a>
  </div>
)

export default ContactIcons
