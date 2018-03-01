import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import contactFormInputs from './contactFormInputs'

const personalWebsiteApp = combineReducers({
  visibilityFilter,
  contactFormInputs
})

export default personalWebsiteApp
