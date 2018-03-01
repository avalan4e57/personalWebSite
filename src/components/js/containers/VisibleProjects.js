import { connect } from 'react-redux'
import Projects from '../Projects'
import projectsData from '../../../projectsData.json'

const getVisibleProjects = (projects, filter) => {
  switch (filter) {
    case 'SHOW_REACT_REDUX':
      return projects.filter(p => p.type === 'reactRedux')
    case 'SHOW_BOOTSTRAP':
      return projects.filter(p => p.type === 'bootstrap')
    case 'SHOW_ALL':
    default:
      return projects
  }
}

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item) })
  return images
}

const images = importAll(require.context('../../img/projects/', false, /\.(png|jpe?g|svg)$/))

let projects = projectsData.map(item => ({
  id: item.id,
  image: images[item.image],
  name: item.name,
  description: item.description,
  github: item.github,
  www: item.www,
  type: item.type
}))

const mapStateToProps = state => {
  return {
    projects: getVisibleProjects(projects, state.visibilityFilter)
  }
}

const VisibleProjects = connect(
  mapStateToProps
)(Projects)

export default VisibleProjects
