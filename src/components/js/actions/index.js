export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_REACT_REDUX: 'SHOW_REACT_REDUX',
  SHOW_BOOTSTRAP: 'SHOW_BOOTSTRAP'
}
