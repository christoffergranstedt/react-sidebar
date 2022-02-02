import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PersonProvider } from './Contexts/Person/PersonProvider'

ReactDOM.render(
  <React.StrictMode>
    <PersonProvider>
      <App />
    </PersonProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
