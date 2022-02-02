import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'
import { SideBar } from './Components/SideBar/SideBar'

function App () {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Router>
        <Header className="bg-gray-800 h-36 w-full"/>
        <main className="bg-gray-700 h-full flex flex-grow">
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
          <SideBar className="w-96 bg-gray-800 flex-grow"/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
