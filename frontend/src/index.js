import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './bootstrap.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
//
import { Provider as ReduxProvider } from 'react-redux'
import Store from './redux/store'
//
ReactDOM.render(
  <ReduxProvider store={Store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
