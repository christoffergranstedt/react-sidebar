import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center text-gray-800">
        <p className="text-3xl">404 - Page not found</p>
        <Link className="my-8 hover:text-gray-500" to="/">Go back to start</Link>
      </section>
    </>
  )
}
