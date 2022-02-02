import React from 'react'
import { toast } from 'react-toastify'

import { PageHeading } from '../../PageHeading/PageHeading'
import { SideBar } from '../../Components/SideBar/SideBar'
import { PersonContext } from '../../Contexts/Person/PersonContext'

export const HomePage: React.FC = () => {
  const { persons, fetchAndSetPersons } = React.useContext(PersonContext)

  React.useEffect(() => {
    const getSideBarItems = async () => {
      try {
        if (!persons || persons.length === 0) await fetchAndSetPersons()
      } catch (error) {
        toast.error('There was an error. Please try again.')
      }
    }

    getSideBarItems()
  }, [])

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
