import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  user: any
}

const initialState: InitialState = {
  // token: '',
  // logined: false
  user: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setLoginedUserAction(state, action) {
    //   state.logined = action.payload.logined
    // },
    // setTokenAction(state, action) {
    //   state.token = action.payload.token
    // }
    setUserData(state, action) {
      state.user = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer