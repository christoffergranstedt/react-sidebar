import React from 'react'

import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonContextProps {
  persons: PersonInfo[]
  fetchAndSetPersons: () => Promise<void>
  setSelectedId?: (id: string) => void
  isSelected?(id: string): boolean
}

export const PersonContext = React.createContext<PersonContextProps>({
  persons: [],
  fetchAndSetPersons: async () => {}
})
