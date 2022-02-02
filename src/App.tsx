import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'
import { SideBar } from './Components/SideBar/SideBar'

function App () {
  return (
    <div className="h-screen text-white">
      <Header className="bg-gray-800 h-36 text-center"/>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      <main className="bg-gray-600 h-full flex">
        <Router>
          <SideBar className="w-96 bg-red-400 h-full"/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
