import React from 'react'
import { HTTPMethod } from '../../Constants/HTTPMethod'
import { useRequest } from '../../Hooks/useRequest'
import { PersonInfo } from '../../Interfaces/PersonInfo'
import { PersonContext } from './PersonContext'
import { PersonActionType, personReducer, PersonState } from './PersonReducer'

const initialPersonState: PersonState = {
  persons: [],
  selectedId: null
}

interface PersonProviderProps {
  children: React.ReactNode
}

export const PersonProvider: React.FC<PersonProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(personReducer, initialPersonState)
  const { persons, selectedId } = state
  const { sendRequest } = useRequest()

  const isSelected = React.useCallback((id: string): boolean => {
    return selectedId === id
  }, [])

  const fetchAndSetPersons = React.useCallback(async (): Promise<void> => {
    if (!process.env.REACT_APP_API_URL) throw new Error('REACT_APP_API_URL needs to be provided as a environment variable')

    const data = await sendRequest<PersonInfo[]>({ url: process.env.REACT_APP_API_URL, method: HTTPMethod.Get })
    if (!data || data.length === 0) throw new Error('No data was fetched')

    dispatch({ type: PersonActionType.SetSelctedPersons, payload: { persons: data } })
  }, [])

  const setSelectedId = React.useCallback((id: string): void => {
    dispatch({ type: PersonActionType.SetSelectedId, payload: { selectedId: id } })
  }, [])

  return (
    <PersonContext.Provider value={{ persons, fetchAndSetPersons, isSelected, setSelectedId }}>
      {children}
    </PersonContext.Provider>
  )
}
