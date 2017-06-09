import * as Action from '../constants/actions'

const initialState = {
  resources: false
}

export default function folders(state = initialState, action) {
  switch (action.type) {
    case Action.INIT_APP:
      return { ...state, resources: action.folders }

    default:
      return state
  }
}
