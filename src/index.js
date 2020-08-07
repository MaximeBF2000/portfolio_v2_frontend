import React from 'react'
import ReactDOM from 'react-dom'
import { GeneralProvider } from "./context/AppState"
import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
