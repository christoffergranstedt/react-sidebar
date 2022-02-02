import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonState {
  persons: PersonInfo[]
  selectedId: string | null
}

export const initialPersonState: PersonState = {
  persons: [],
  selectedId: null
}

export enum ActionType {
  SetSelctedPersons,
  SetSelectedId
}

interface SetSelctedPersons {
  type: ActionType.SetSelctedPersons
  payload: { persons: PersonInfo[] }
}

interface SetSelectedId {
  type: ActionType.SetSelectedId
  payload: { selectedId: string }
}

type PersonActions = SetSelctedPersons | SetSelectedId

export const personReducer = (state: PersonState, action: PersonActions): PersonState => {
  switch (action.type) {
    case ActionType.SetSelctedPersons:
      return {
        ...state,
        persons: action.payload.persons
      }
    case ActionType.SetSelectedId:
      return {
        ...state,
        selectedId: action.payload.selectedId
      }
    default:
      return state
  }
}
