import * as Action from '../constants/actions'

const initialState = {
  resources: false,
  message: false,
}

export default function folders(state = initialState, action) {
  switch (action.type) {
    case Action.GET_DATA:
      return { ...state }

    case Action.GET_DATA_SUCCESS:
      return { ...state, resources: action.folders }

    case Action.GET_DATA_FAIL:
      return { ...state, message: action.message }

    default:
      return state
  }
}
