import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import App from './containers/App.js'
import './index.css'

const isOpenDevTools = process.env.NODE_ENV === 'development' && window.devToolsExtension
const middlewares = [thunk]
const rootEl = document.getElementById('root')

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    isOpenDevTools ? window.devToolsExtension() : f => f
  )
)

// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     const nextReducer = require('./reducers').default
//     store.replaceReducer(nextReducer)
//   })
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
