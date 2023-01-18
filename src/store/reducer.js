import { combineReducers } from 'redux'
const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload
    case 'remove':
      return state - action.payload

    default:
      return state
  }
}

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'insert':
      return [action.payload, ...state]
    case 'delete':
      return (state = state.filter((user) => user.name !== action.payload))
    default:
      return state
  }
}

const reducer = combineReducers({
  account: accountReducer,
  user: userReducer,
})

export default reducer
