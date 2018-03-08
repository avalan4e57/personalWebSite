import React, { Component } from 'react'
import Main from './Main.js'
import data from '../../projectsData.json'
import styles from '../../styles/Projects.scss'
import ProjectFilter from './ProjectFilter'
import { Parallax } from 'react-parallax'
import projectsImg from '../../img/projects.jpg'

const Projects = ({ projects }) => (
  <Parallax strength={300} bgImage={ projectsImg }>
    <div className={ styles.projects }>
      <ProjectFilter />
      <Main cards={ projects } />
    </div>
  </Parallax>
)

export default Projects
