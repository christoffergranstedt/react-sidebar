import { PersonInfo } from '../../Interfaces/PersonInfo'

export interface PersonState {
  persons: PersonInfo[]
  selectedPerson: PersonInfo | null
  isLoading: boolean
}

export enum PersonActionType {
  SetSelctedPersons,
  setSelectedPerson,
  setIsLoading
}

interface SetSelctedPersons {
  type: PersonActionType.SetSelctedPersons
  payload: { persons: PersonInfo[] }
}

interface setSelectedPerson {
  type: PersonActionType.setSelectedPerson
  payload: { person: PersonInfo }
}

interface setIsLoading {
  type: PersonActionType.setIsLoading
  payload: { isLoading: boolean }
}

type PersonActions = SetSelctedPersons | setSelectedPerson | setIsLoading

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
    case PersonActionType.setIsLoading:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    default:
      return state
  }
}
