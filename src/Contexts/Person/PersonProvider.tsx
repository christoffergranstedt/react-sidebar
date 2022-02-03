import React from 'react'

import { HTTPMethod } from '../../Constants/HTTPMethod'
import { useRequest } from '../../Hooks/useRequest'
import { PersonInfo } from '../../Interfaces/PersonInfo'
import { PersonContext } from './PersonContext'
import { PersonActionType, personReducer, PersonState } from './PersonReducer'

const initialPersonState: PersonState = {
  persons: [],
  selectedPerson: null
}

interface PersonProviderProps {
  children: React.ReactNode
}

export const PersonProvider: React.FC<PersonProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(personReducer, initialPersonState)
  const { persons, selectedPerson } = state
  const { sendRequest } = useRequest()

  const fetchAndSetPersons = React.useCallback(async (): Promise<void> => {
    const apiURL = process.env.REACT_APP_API_URL || 'https://61f5037b62f1e300173c3f8d.mockapi.io/node'

    const data = await sendRequest<PersonInfo[]>({ url: apiURL, method: HTTPMethod.Get })
    if (!data || data.length === 0) throw new Error('No data was fetched')

    dispatch({ type: PersonActionType.SetSelctedPersons, payload: { persons: data } })
  }, [])

  const setSelectedPerson = React.useCallback((selectedPerson: PersonInfo): void => {
    dispatch({ type: PersonActionType.setSelectedPerson, payload: { person: selectedPerson } })
  }, [])

  return (
    <PersonContext.Provider value={{ persons, fetchAndSetPersons, selectedPerson, setSelectedPerson }}>
      {children}
    </PersonContext.Provider>
  )
}
