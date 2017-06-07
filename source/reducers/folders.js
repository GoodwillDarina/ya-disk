import * as Action from '../constants/actions'

const initialState = {
  systemFolders: ''
}

export default function folders(state = initialState, action) {
  switch (action.type) {
    case Action.INIT_APP:
      return { ...state, systemFolders: action.folders }

    default:
      return state
  }
}
