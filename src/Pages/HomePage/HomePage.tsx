import React from 'react'
import { SideBar } from '../../Components/SideBar/SideBar'
import { PageHeading } from '../../PageHeading/PageHeading'

export const HomePage: React.FC = () => {
  return (
    <>
      <SideBar className="w-96 bg-red-400 h-full"/>
      <section className="w-full text-center">
        <PageHeading title="Main"/>
        <p>To display clicked event</p>
      </section>
    </>
  )
}
