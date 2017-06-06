import * as Action from '../constants/actions'

const initialState = {}

export default function folders(state = initialState, action) {
  switch (action.type) {
    case Action.INIT_APP:
      return { ...state }

    default:
      return state
  }
}
