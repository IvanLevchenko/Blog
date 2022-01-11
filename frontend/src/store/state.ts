import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const state = configureStore({
  reducer: {
    user: userReducer
  }
})