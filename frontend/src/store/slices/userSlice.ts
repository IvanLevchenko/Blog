import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  user: any
}

const initialState: InitialState = {
  user: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer