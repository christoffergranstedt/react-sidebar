import React from 'react'

import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonContextProps {
  persons: PersonInfo[]
  selectedPerson: PersonInfo | null
  isLoading: boolean
  fetchAndSetPersons: () => Promise<void>
  setSelectedPerson?: (person: PersonInfo) => void
}

export const PersonContext = React.createContext<PersonContextProps>({
  persons: [],
  selectedPerson: null,
  isLoading: false,
  fetchAndSetPersons: async () => {}
})
