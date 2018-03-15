import React, { Component } from 'react'
import Main from './Main.js'
import data from '../../projectsData.json'
import styles from '../../styles/Projects.scss'
// import ProjectFilter from './ProjectFilter'
// import projectsImg from '../../img/projects.jpg'

const Projects = ({ projects }) => (
  <div className={ styles.projects }>
    {/* <ProjectFilter /> */}
    <h2 className={ styles.title }>My pet projects:</h2>
    <Main cards={ projects } />
  </div>
)

export default Projects
