import React from 'react'

import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonContextProps {
  persons: PersonInfo[]
  selectedPerson: PersonInfo | null
  fetchAndSetPersons: () => Promise<void>
  setSelectedPerson?: (person: PersonInfo) => void
}

export const PersonContext = React.createContext<PersonContextProps>({
  persons: [],
  selectedPerson: null,
  fetchAndSetPersons: async () => {}
})

export const usePersonContext = () => React.useContext(PersonContext)
