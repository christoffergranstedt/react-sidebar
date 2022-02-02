import React from 'react'
import { toast } from 'react-toastify'

import { PageHeading } from '../../PageHeading/PageHeading'
import { PersonContext } from '../../Contexts/Person/PersonContext'

export const HomePage: React.FC = () => {
  const { persons, fetchAndSetPersons, selectedPerson } = React.useContext(PersonContext)
  const [selectedPersonMessage, setSelectedPersonMessage] = React.useState<string>()

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
      setSelectedPersonMessage(`The selected side bar person is "${selectedPerson.name}"`)
    } else {
      setSelectedPersonMessage('Nothing is selected')
    }
  }, [selectedPerson])

  return (
    <>
      <section className="w-full text-center">
        <PageHeading title="Main"/>
        <p className="text-3xl">{selectedPersonMessage}</p>
      </section>
    </>
  )
}
