import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'

function App () {
  return (
    <div className="h-screen text-white">
      <Header className="bg-gray-800 h-36 text-center"/>
      <main className="bg-gray-600 h-full flex">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
