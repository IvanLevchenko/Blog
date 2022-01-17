import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  token: string,
  user: {
    _id: string,
    user: string,
    password: string
  }
}

const initialState: InitialState = {
  token: '',
  user: {
    _id: '',
    user: '',
    password: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      console.log(action.payload)
      state.token = action.payload.token
      state.user = action.payload.user
    }
  }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer