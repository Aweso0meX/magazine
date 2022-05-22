import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { setupStore } from './Redux/store'
import './scss/style.scss'

const store = setupStore()

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
