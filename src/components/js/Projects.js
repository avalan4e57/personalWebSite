import React, { Component } from 'react'
import Main from './Main.js'
import data from './../../projectsData.json'
import styles from '../scss/Projects.scss'
import ProjectFilter from './ProjectFilter.js'
import { Parallax } from 'react-parallax'
import projectsImg from '../img/projects.jpg'

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }
//
// const images = importAll(require.context('./../img/projects/', false, /\.(png|jpe?g|svg)$/));

// class Projects extends Component {
//   constructor() {
//     super()
//     this.state = {
//       cards: [],
//       queryInput: ''
//     }
//   }
//
//   componentDidMount() {
//     let cards = data.map(item => ({
//         id: item.id,
//         image: images[item.image],
//         name: item.name,
//         description: item.description,
//         github: item.github,
//         www: item.www
//       })
//     )
//     this.setState({ cards: cards })
//   }

//   render() {
//     return(
//       <div>
//         <h1>My pet projects</h1>
//         <Main cards={ this.state.cards } />
//       </div>
//     )
//   }
// }

const Projects = ({ projects }) => (
  <Parallax strength={300} bgImage={ projectsImg }>
    <div className={ styles.projects }>
      <ProjectFilter />
      {/* <h1>My pet projects</h1> */}
      <Main cards={ projects } />
    </div>
  </Parallax>
)

export default Projects
