import { AnyAction } from 'redux'

let initialState = {
  token: '',
  logined: ''
}

export default async function userReducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case 'SET_TOKEN': 
      return {...state, token: action.token}
    case 'SET_LOGINED':
      return {...state, logined: action.logined}
  }
}