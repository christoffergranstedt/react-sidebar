import React from 'react'
import { toast } from 'react-toastify'
import { usePersonContext } from '../../Hooks/usePersonContext'

export const HomePage: React.FC = () => {
  const { persons, fetchAndSetPersons, selectedPerson } = usePersonContext()
  const [selectedPersonMessage, setSelectedPersonMessage] = React.useState<string>()

  React.useEffect(() => {
    const getSideBarItems = async () => {
      try {
        if (!persons || persons.length === 0) await fetchAndSetPersons()
      } catch (error) {
        console.log(error)
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
      <section className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl text-gray-800">{selectedPersonMessage}</p>
      </section>
    </>
  )
}
