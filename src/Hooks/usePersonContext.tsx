import React from 'react'

import { PersonContext } from '../Contexts/Person/PersonContext'

export const usePersonContext = () => React.useContext(PersonContext)
