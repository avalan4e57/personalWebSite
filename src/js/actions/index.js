export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const updateName = text => {
  return {
    type: 'INPUT_NAME',
    text
  }
}

export const updateEmail = text => {
  return {
    type: 'INPUT_EMAIL',
    text
  }
}

export const updateSubject = text => {
  return {
    type: 'INPUT_SUBJECT',
    text
  }
}

export const updateBody = text => {
  return {
    type: 'INPUT_BODY',
    text
  }
}

export const clearInputs = () => {
  return {
    type: 'CLEAR_ALL'
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_REACT_REDUX: 'SHOW_REACT_REDUX',
  SHOW_BOOTSTRAP: 'SHOW_BOOTSTRAP'
}
