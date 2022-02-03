import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { PersonProvider } from './Contexts/Person/PersonProvider'

ReactDOM.render(
  <React.StrictMode>
    <PersonProvider>
      <Router>
        <App />
      </Router>
    </PersonProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
