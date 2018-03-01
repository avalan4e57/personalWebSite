import React from 'react'
import FilterLink from './containers/FilterLink'
import { VisibilityFilters } from './actions'

const ProjectFilter = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={ VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={ VisibilityFilters.SHOW_REACT_REDUX }>
      React/redux
    </FilterLink>
    {', '}
    <FilterLink filter={ VisibilityFilters.SHOW_BOOTSTRAP}>
      Bootstrap
    </FilterLink>
  </p>
)

export default ProjectFilter
