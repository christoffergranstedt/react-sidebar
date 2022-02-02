import { PersonInfo } from '../../Interfaces/PersonInfo'

export interface PersonState {
  persons: PersonInfo[]
  selectedPerson: PersonInfo | null
}

export enum PersonActionType {
  SetSelctedPersons,
  setSelectedPerson
}

interface SetSelctedPersons {
  type: PersonActionType.SetSelctedPersons
  payload: { persons: PersonInfo[] }
}

interface setSelectedPerson {
  type: PersonActionType.setSelectedPerson
  payload: { person: PersonInfo }
}

type PersonActions = SetSelctedPersons | setSelectedPerson

export const personReducer = (state: PersonState, action: PersonActions): PersonState => {
  switch (action.type) {
    case PersonActionType.SetSelctedPersons:
      return {
        ...state,
        persons: action.payload.persons
      }
    case PersonActionType.setSelectedPerson:
      return {
        ...state,
        selectedPerson: action.payload.person
      }
    default:
      return state
  }
}
