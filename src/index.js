import React from 'react'
import { render } from 'react-dom'
import App from './js/components/App.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import personalWebsiteApp from './js/reducers'

let store = createStore(personalWebsiteApp)

window.getState = store.getState

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
