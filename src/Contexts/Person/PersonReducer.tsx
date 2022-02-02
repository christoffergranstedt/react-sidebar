import { PersonInfo } from '../../Interfaces/PersonInfo'

export interface PersonState {
  persons: PersonInfo[]
  selectedId: string | null
}

export enum PersonActionType {
  SetSelctedPersons,
  SetSelectedId
}

interface SetSelctedPersons {
  type: PersonActionType.SetSelctedPersons
  payload: { persons: PersonInfo[] }
}

interface SetSelectedId {
  type: PersonActionType.SetSelectedId
  payload: { selectedId: string }
}

type PersonActions = SetSelctedPersons | SetSelectedId

export const personReducer = (state: PersonState, action: PersonActions): PersonState => {
  switch (action.type) {
    case PersonActionType.SetSelctedPersons:
      return {
        ...state,
        persons: action.payload.persons
      }
    case PersonActionType.SetSelectedId:
      return {
        ...state,
        selectedId: action.payload.selectedId
      }
    default:
      return state
  }
}
