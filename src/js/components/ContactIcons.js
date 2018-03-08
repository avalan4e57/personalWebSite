import React from 'react'

import styles from '../../styles/ContactIcons.scss'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

const ContactIcons = () => (
  <div className={ styles.contacts }>
    <a href='https://github.com/avalan4e57' className={ styles.github } target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
    <a href='mailto:am.igor.chernega@gmail.com?subject=Mail_from_Our_Site' className={ styles.mail }><FontAwesomeIcon icon={faEnvelope} /></a>
  </div>
)

export default ContactIcons
