import React from 'react'

import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonContextProps {
  persons: PersonInfo[]
  selectedId: string | null
  fetchAndSetPersons: () => Promise<void>
  setSelectedId?: (id: string) => void
}

export const PersonContext = React.createContext<PersonContextProps>({
  persons: [],
  selectedId: null,
  fetchAndSetPersons: async () => {}
})
