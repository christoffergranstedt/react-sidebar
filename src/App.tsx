import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'

function App () {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
