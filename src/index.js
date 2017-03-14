import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import App from './containers/App.js'
import './index.css'

const isOpenDevTools = process.env.NODE_ENV === 'development' && window.devToolsExtension
const middlewares = [thunk]
const rootEl = document.getElementById('root')

const store = createStore(
  rootReducer,
  loadState(),
  compose(
    applyMiddleware(...middlewares),
    isOpenDevTools ? window.devToolsExtension() : f => f
  )
)

store.subscribe(throttle(()=>{
  saveState({ todoList: store.getState().todoList })
}),1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)