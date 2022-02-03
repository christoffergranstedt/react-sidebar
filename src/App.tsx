import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from './Pages/HomePage/HomePage'
import { Header } from './Components/Header/Header'
import { SideBar } from './Components/SideBar/SideBar'
import { NotFoundPage } from './Pages/NotFoundPage.tsx/NotFoundPage'

function App () {
  const routes = (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/' element={<HomePage/>}></Route>
  </Routes>
  )

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Header className="bg-gray-700 h-36 w-full"/>
      <main className="bg-gray-200 h-full flex flex-grow">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
        <SideBar className="w-96 bg-gray-700 flex-grow"/>
        {routes}
      </main>
    </div>
  )
}

export default App
