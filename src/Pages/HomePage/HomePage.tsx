import React from 'react'
import { toast } from 'react-toastify'

import { PageHeading } from '../../PageHeading/PageHeading'
import { PersonContext } from '../../Contexts/Person/PersonContext'

export const HomePage: React.FC = () => {
  const { persons, fetchAndSetPersons, selectedPerson } = React.useContext(PersonContext)
  const [displayMessage, setDisplayMessage] = React.useState<string>()

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

  React.useEffect(() => {
    if (selectedPerson) {
      setDisplayMessage(`The selected side bar person is "${selectedPerson.name}"`)
    } else {
      setDisplayMessage('Nothing is selected')
    }
  }, [selectedPerson])

  return (
    <>
      <section className="w-full text-center">
        <PageHeading title="Main"/>
        <p>{displayMessage}</p>
      </section>
    </>
  )
}
