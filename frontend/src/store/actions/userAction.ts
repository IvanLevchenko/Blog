import { state } from '../reducers/state';

interface TokenDispatcher {
  type: string,
  token: string
}

export const setTokenAction = (data: Omit<TokenDispatcher, 'type'>): void => {
  state.dispatch<TokenDispatcher>({ type: 'SET_TOKEN', token: data.token })
}

interface LoginDispatcher extends Omit<TokenDispatcher, 'token'> {
  logined: boolean
}

export const setLoginedUserAction = (data: Omit<LoginDispatcher, 'type'>): void => {
  state.dispatch<LoginDispatcher>({ type: 'SET_LOGINED', logined: data.logined })
}